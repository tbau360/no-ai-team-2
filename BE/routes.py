from fastapi import APIRouter

router = APIRouter(prefix="/api")


@router.get("/health")
def health_check():
    return {"status": "ok", "message": "Service is running."}


@router.get("/test")
def test_endpoint():
    return {"status": "ok", "message": "Test endpoint is working."}


# Endpoint #1
@router.get("/authors")
def get_authors():
    return [{"name": "Dummy Author 1", "email": "dummy@author.com"}]


# Endpoint #2
@router.get("/outliers")
def get_outliers():
    return [
        {
            "sha": 123456,
            "title": "Large commit message",
            "author": {"name": "Dummy Author 1", "email": "dummy@author.com"},
        }
    ]


# Endpoint #3
@router.get("/snapshot/{type}")
def get_snapshot(type: str):
    return {}


# Endpoint #4
@router.get("/commit-search-count")
def get_commit_search_count():
    return {}
