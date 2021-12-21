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

## Caveat

- While developing i encounter a rate limit of 200 request per hour. So to fix this issue I've added cypress test to record the API response and test from there.
