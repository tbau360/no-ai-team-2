#!/bin/bash

# Activate virtual environment
source $(pipenv --venv)/bin/activate

# Check if Pipfile.lock has changed
if ! git diff-index --quiet HEAD -- Pipfile.lock; then
    # Generate requirements.txt
    pipenv requirements > requirements.txt

    echo "Pipfile.lock has changed. Updated requirements.txt."
else
    echo "No changes detected in Pipfile.lock. Skipping update of requirements.txt."
fi

# Deactivate virtual environment
exit
