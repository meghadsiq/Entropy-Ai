from flask import Flask
from models import db
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configurations
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize DB with app
db.init_app(app)

# Import and register blueprints **after** app and db are set up
from utils.api.auth_api import auth_bp
app.register_blueprint(auth_bp)

from utils.api.file_api import file_api
app.register_blueprint(file_api)

# Default route to check server status
@app.route('/')
def index():
    return 'EntropyAI Backend is Running 🚀'

# Entry point
if __name__ == '__main__':
    app.run(debug=True)