#!/usr/bin/env bash

pushd backend

# Copy env file
cp .env.example .env

# Seed database
npx prisma migrate dev
npx prisma db seed --preview-feature

popd