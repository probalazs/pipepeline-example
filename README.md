# pipepeline-example

## Stage 1 (implement pipeline)
- Complete the types in `src/interface.ts`.
- Implement `runPipeline` function with tests.

## Stage 2 (implement middlewares)
- Fix the `npm test` script. The test command: `jest`.
- Implement `logger-middleware` in `src/middlewares/` folder. Tests are not mandatory but recommended. You can use `console` object for logging.
  - Log `start` when application start.
  - Log `end` at the end.
  - Log `error` on error.
- Implement `catfact-middleware.ts` in `src/middlewares/` folder. Tests are mandatory.
  - Fetch a fact from cats from `https://catfact.ninja/fact` and add it to the context.

## Stage 3
- Combine the middlewares and print out the fact like this: `I have learned this about cats: <fact>`. You can use `console` object again.
- +1 Create `npm start` script that runs the whole application. The command: `ts-node src/index.ts`

## Useful links for implementation:
- https://developer.mozilla.org/en-US/docs/Web/API/console
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- https://jestjs.io/docs/api
- https://github.com/axios/axios#example
- https://docs.npmjs.com/cli/v8/using-npm/scripts
- I found this one, maybe helpful: https://www.typescriptlang.org/cheatsheets
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
