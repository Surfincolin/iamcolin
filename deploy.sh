#!/bin/bash

# import .env file
set -a
source ./.env
set +a

echo "Build project..."
npm run build

echo "Syncing files to S3 bucket..."
aws s3 sync ./dist s3://$S3_BUCKET --delete

echo "Creating Cloudfront invalidation..."
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --path $INVALIDATION_PATH --query 'Invalidation.Id' --output text)

echo "Waiting for invalidation to complete..."
aws cloudfront wait invalidation-completed --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --id $INVALIDATION_ID

echo "Deployment complete!"
