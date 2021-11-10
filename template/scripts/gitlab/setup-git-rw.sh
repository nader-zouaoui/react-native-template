#!/bin/bash
#
# Expected to run in GitLab job
#
# Configures job environment so it is possible to write into git repo.
# Variables are passed from GitLab config or job `script`/`variables`
#

# setup ssh for pushing into git repo
mkdir -p ~/.ssh && chmod 700 ~/.ssh
ssh-keyscan gitlab.com >> ~/.ssh/known_hosts && chmod 644 ~/.ssh/known_hosts
eval $(ssh-agent -s)
ssh-add <(echo "$SSH_PRIVATE_KEY")

# prepare git config for pushing remote repo
# replace http to ssh git url to use ssh key auth
GIT_REPOSITORY_URL=$(echo $CI_REPOSITORY_URL | sed -e 's/.*\@/git\@/' -e 's/\//:/')
git remote set-url --push origin $GIT_REPOSITORY_URL

# refresh git tags (gitlab uses fetch instead of clone which does not refresh deleted tags)
git tag -l | xargs git tag -d
git fetch --tags