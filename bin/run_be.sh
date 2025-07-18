#!/bin/bash

export DD_SERVICE='python-template'
export ENV='local'
export BASE_DIR=$(pwd)

# Activate the virtual environment
source .venv/bin/activate

# Set environment variables if needed
export DATABASE_URL="sqlite:///./test.db"

# Run the FastAPI gs360_api
uvicorn BE.app:app --host 0.0.0.0 --port 8000 --reload
