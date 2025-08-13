# backend/app/routes/reports_routes.py
from flask import Blueprint, jsonify
reports_bp = Blueprint('reports', __name__)

@reports_bp.route('/', methods=['GET'])
def get_reports():
    # placeholder
    return jsonify({"weekly_average": 84.2, "generated": 12})
