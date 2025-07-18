from datetime import datetime

from fastapi import APIRouter
from pydantic import BaseModel

from BE.github_service import GithubService

router = APIRouter(prefix="/api")


class DateRange(BaseModel):
    start_date: datetime  # ISO format date string
    end_date: datetime


@router.get("/health")
def health_check():
    return {"status": "ok", "message": "Service is running."}


@router.get("/test")
def test_endpoint():
    return {"status": "ok", "message": "Test endpoint is working."}


# Endpoint #1
@router.post("/authors")
# {start_date: str, end_date: str}
def get_authors(date_range: DateRange):

    github = GithubService()
    print(f"start_date {date_range.start_date}, end_date {date_range.end_date}")

    # results = github.fetch_authors(date_range.start_date, date_range.end_date)
    results = github.fetch_authors_stub()
    print(results)
    return results


# Endpoint #2
@router.post("/outliers")
def get_outliers(date_range: DateRange):
    github = GithubService()
    # results = github.fetch_outliers_stub()
    results = github.search_outliers(date_range.start_date, date_range.end_date)
    print(results)

    return results


# Endpoint #3
@router.get("/snapshot/{type}")
def get_snapshot(type: str):
    return {}


# Endpoint #4
@router.post("/commit-search-count")
def get_commit_search_count(date_range: DateRange):
    github = GithubService()
    return github.fetch_word_cloud_stub()
