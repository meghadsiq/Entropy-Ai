from flask import Blueprint, request, jsonify
from models.user import User
 # db will be imported locally in functions to avoid circular import
from utils.authentication.helper import hash_password, verify_password, generate_token
from utils.authentication.helper import jwt_required
auth_bp = Blueprint('auth_api', __name__)

@auth_bp.route('/api/auth/signup', methods=['POST'])
def signup():
    from app import db  # Local import to avoid circular import
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(email=email).first():
        return jsonify({'error': 'Email already exists'}), 400

    user = User(name=name, email=email, password=hash_password(password))
    db.session.add(user)
    db.session.commit()

    token = generate_token(user.id)
    return jsonify({'message': 'Signup successful', 'token': token}), 201

@auth_bp.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not verify_password(password, user.password):
        return jsonify({'error': 'Invalid email or password'}), 401

    token = generate_token(user.id)
    return jsonify({'message': 'Login successful', 'token': token}), 200



@auth_bp.route('/api/auth/profile', methods=['GET'])
@jwt_required
def profile():
    user = request.current_user
    return jsonify({
        'id': str(user.id),
        'name': user.name,
        'email': user.email,
        'created_at': user.created_at
    }), 200

@auth_bp.route('/api/auth/logout', methods=['POST'])
@jwt_required
def logout():
    return jsonify({'message': 'Logged out successfully'}), 200