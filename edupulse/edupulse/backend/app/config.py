# config.py

class Config:
    # Flask settings
    DEBUG = True
    TESTING = False
    PORT = 5000

    # CORS settings
    CORS_HEADERS = 'Content-Type'

    # Detection thresholds (for AI scoring heuristics)
    FACE_SCORE = 40
    EYES_OPEN_SCORE = 30
    GAZE_CENTERED_SCORE = 30
    ENGAGEMENT_THRESHOLD = 70  # Below this → distracted

    # Privacy settings
    STORE_VIDEO = False  # Per your PPT: No video is stored
    ENABLE_LOGGING = True  # Enable in-memory or DB logging
