# test_routes.py
import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
import pytest
from app import create_app

# Pytest fixture to create a test client
@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

# Test /api/detect/status route
def test_status_route(client):
    response = client.get('/api/detect/status')
    assert response.status_code == 200
    assert 'status' in response.get_json()
    assert response.get_json()['status'] in ['focused', 'distracted']

# Test /api/logs/ route (log_event)
def test_log_event_route(client):
    response = client.get('/api/logs/')
    assert response.status_code == 200
    data = response.get_json()
    assert 'timestamp' in data
    assert 'status' in data

# Test /api/logs/all route (get_logs)
def test_get_all_logs(client):
    # Call the endpoint once to create a log
    client.get('/api/logs/')
    response = client.get('/api/logs/all')
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)
    assert len(data) >= 1
