from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
from app import db
from models.file import UploadedFile
from models.user import User
from utils.authentication.helper import jwt_required

import os
import uuid

file_api = Blueprint("file_api", __name__)

UPLOAD_FOLDER = 'uploads/'
ALLOWED_EXTENSIONS = {'pdf', 'doc', 'docx', 'txt', 'csv'}
MAX_FILE_SIZE_MB = 5

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# POST /api/files/upload
@file_api.route('/api/files/upload', methods=['POST'])
@jwt_required
def upload_file():
    current_user = request.current_user  # ✅ Get current user from request

    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        ext = filename.rsplit('.', 1)[1].lower()

        file.seek(0, os.SEEK_END)
        file_length_mb = file.tell() / (1024 * 1024)
        file.seek(0)
        if file_length_mb > MAX_FILE_SIZE_MB:
            return jsonify({"error": "File exceeds 5MB limit"}), 400

        os.makedirs(UPLOAD_FOLDER, exist_ok=True)

        unique_name = f"{uuid.uuid4()}_{filename}"
        file_path = os.path.join(UPLOAD_FOLDER, unique_name)
        file.save(file_path)

        uploaded_file = UploadedFile(
            user_id=current_user.id,
            filename=filename,
            file_type=ext,
            file_path=file_path,
        )
        db.session.add(uploaded_file)
        db.session.commit()

        return jsonify({"message": "File uploaded", "file_id": str(uploaded_file.id)}), 201

    return jsonify({"error": "Invalid file type"}), 400

# GET /api/files/<user_id>
@file_api.route('/api/files/<uuid:user_id>', methods=['GET'])
@jwt_required
def get_user_files(user_id):
    current_user = request.current_user

    if current_user.id != user_id:
        return jsonify({"error": "Unauthorized"}), 403

    files = UploadedFile.query.filter_by(user_id=user_id).all()
    file_data = [{
        "id": str(f.id),
        "filename": f.filename,
        "file_type": f.file_type,
        "uploaded_at": f.uploaded_at.isoformat()
    } for f in files]

    return jsonify({"files": file_data}), 200

# DELETE /api/files/<file_id>
@file_api.route('/api/files/<uuid:file_id>', methods=['DELETE'])
@jwt_required
def delete_file(file_id):
    current_user = request.current_user

    file = UploadedFile.query.filter_by(id=file_id).first()
    if not file:
        return jsonify({"error": "File not found"}), 404

    if file.user_id != current_user.id:
        return jsonify({"error": "Unauthorized"}), 403

    if os.path.exists(file.file_path):
        os.remove(file.file_path)

    db.session.delete(file)
    db.session.commit()

    return jsonify({"message": "File deleted"}), 200
