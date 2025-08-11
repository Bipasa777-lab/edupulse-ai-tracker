from flask import Flask
from flask_cors import CORS
from app.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    from .routes.detection_routes import detection_bp
    from .routes.attendance_routes import attendance_bp
    from .routes.logging_routes import logging_bp
    from .routes.reports_routes import reports_bp

    app.register_blueprint(detection_bp, url_prefix='/api/detect')
    app.register_blueprint(attendance_bp, url_prefix='/api')
    app.register_blueprint(logging_bp, url_prefix='/api/logs')
    app.register_blueprint(reports_bp, url_prefix='/api/reports')

    return app
