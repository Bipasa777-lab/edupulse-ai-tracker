# scoring.py

def calculate_engagement_score(face_detected: bool, eyes_open: bool, gaze_centered: bool) -> int:
    """
    Calculates an engagement score based on detection inputs.
    Scoring Heuristics:
        - Face detected: +40
        - Eyes open: +30
        - Gaze centered (i.e., looking at screen): +30
    Total: 100 points

    Returns:
        int: engagement score (0 to 100)
    """
    score = 0

    if face_detected:
        score += 40
    if eyes_open:
        score += 30
    if gaze_centered:
        score += 30

    return score
from app.services.scoring import calculate_engagement_score

# Example from AI model output:
face = True
eyes = False
gaze = True

score = calculate_engagement_score(face, eyes, gaze)
print(f"Engagement Score: {score}")
