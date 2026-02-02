## Project Structure
```
src/
  api/        // axios wrapper and worker API helpers
  assets/     // Logo and any other images
  components/ // Global components
  context/    // WorkerContext holds the WorkerID
  types/      // Holds typescript types
  utils/      // Utility helper functions
  main.tsx    // app entry point
cypress/
  e2e/        // end-to-end specs
  fixtures/   // mock API data
  support/    // custom Cypress commands & setup
```

## Running the app
```bash
npm install
npm run dev
```

## Run Cypress Test 
Implemenetd very basic cypress tests for the job acceptance/rejection flow
```bash
npm run cy:open
npm run cy:run
```
