# Photo App

## Requirements

- NodeJS
- NPM
- Please copy and rename the .env.example to .env.local

## How to run the project?

```
- npm run dev
```

## How to run the unit test?

```
- npm run test:ci
```

## How to run the e2e?

```
- npm run cypress:headless
```

## Libraries used:

- Next JS
- React Query (To handle fetching, pre-fetching and data )
- Jest (unit testing)
- Cypress (e2e)

## FAQ

#### Why sometimes the API response is slow?

- While developing I encounter a rate limit of 200 requests per hour. So to fix this issue I've added a cypress test to record the API response and test from there.

#### Why there no page loader?

- I would love to add if time allows.
