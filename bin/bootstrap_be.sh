#!/bin/bash
export PIPENV_VENV_IN_PROJECT="enabled"
CWD=$(pwd)

######### Deactivating active environment
if [[ "$VIRTUAL_ENV" != "" ]]
then
 echo "=====> Deactivating active environment."
 deactivate
fi

if [ -d "${CWD}/.venv" ]; then
 echo "=====> Removing old environment."
 rm -rf .venv
fi

########## Checking if pipenv is installed
echo "=====> Checking if pipenv is installed."
if [[ "$(pip3 list | grep pipenv)" == "" ]]
then
 echo "=====> Pipenv is not installed, trying to install it."
 pip3 install pipenv
fi

######### Synchronizing dependencies
echo "=====> Synchronizing dependencies."
pipenv sync --dev

######### Activate pipenv environment
echo "=====> Activate pipenv environment."
source $(pipenv --venv)/bin/activate

######### Setting up pre-commit
pipenv run pre-commit install
echo "=====> Running pre-commit."
pre-commit run --all-files
