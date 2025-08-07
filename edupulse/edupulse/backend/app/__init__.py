from flask import Flask
from flask_cors import CORS
from app.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)  # Load config

    # Enable Cross-Origin Resource Sharing (CORS)
    CORS(app)

    # Register blueprints
    from app.routes.detection_routes import detection_bp
    from app.routes.logging_routes import logging_bp

    app.register_blueprint(detection_bp, url_prefix='/api/detect')
    app.register_blueprint(logging_bp, url_prefix='/api/logs')

    return app
