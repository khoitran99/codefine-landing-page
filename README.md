# CODEFINE Landing Page

Production Vite landing page for CODEFINE Joint Stock Company.

## Scripts

- `npm run dev` - start local Vite development server
- `npm run lint` - run Oxlint
- `npm test -- --run` - run Vitest tests once
- `npm run build` - type-check and build production assets

## Deployment

GitHub Actions deploys `dist/` to the existing S3 + CloudFront static hosting stack on pushes to `main`.

Required repository secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

Required repository variables:

- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID`
