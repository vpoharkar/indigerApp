 # Carbon Emission Calculator
Calculates your carbon dioxide emission when you travel from one place to another, depending on your distance and mode of transportation. You can choose among several transportation modes like small-cars, medium-cars, large-cars, or bus to see the comparisons in carbon dioxide emissions.

## tech-stack
[Typescript](https://www.typescriptlang.org/), [Node.js](https://nodejs.org/en/), [Commander.js](https://www.npmjs.com/package/commander), [Axios](https://axios-http.com/).

## prerequisites
Go directory & launch in Visual Studio Code.

Install all the required packages present in package.json. via command
```
npm install
```

## Run application
The application can be executed with start and end names of cities and a method of transport. The argument values can be provided with (=) or (' ').

The application can mainly be executed via [Node](#node) V14.

You can run the application like in the following example commands:


```
ts-node ./co2-calculator.ts --start Hamburg --end Berlin --transportation-method medium-diesel-car
```

```
ts-node ./co2-calculator.ts --start=\"New York\" --end=\"Los Angeles\" --transportation-method=medium-diesel-car
```

```
ts-node ./co2-calculator.ts --start \"New York\" --end \"Los Angeles\" --transportation-method medium-diesel-car
```

<br>
<br>

## Testing
As part of the application are also unit tests that are using the [jest](https://jestjs.io) Framework.
You can run the tests and read test coverages with following command:
```
npm run test:jest
```
to see coverage 
```
npm run test:jest-coverage
