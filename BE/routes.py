from fastapi import APIRouter

router = APIRouter(prefix="/api")


@router.get("/health")
def health_check():
    return {"status": "ok", "message": "Service is running."}


@router.get("/test")
def test_endpoint():
    return {"status": "ok", "message": "Test endpoint is working."}
