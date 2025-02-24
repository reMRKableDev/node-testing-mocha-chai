# Node Testing Mocha Chai 🧪🧪🧪 

This repo contains a collection of JS testing examples showing different testing techniques, patterns, and frameworks. Each subfolder presents a different testing scenario to showcase best practices in JS unit testing. It is organized into 6 subfolders, each containing an implementation file (`app.js`) and its corresponding test file (`appTest.js`).

## Testing Frameworks Used 🛠️

This repository demonstrates testing with:

- **Mocha** - Test runner for organizing and executing tests
- **Chai** - Assertion library with multiple styles (assert, expect, should)
- **Chai as Promised** - Extension for testing promises
- **Node's built-in assert** - For basic assertions

## Testing Styles Demonstrated 💡

The examples showcase different testing approaches:

- **TDD (Test-Driven Development)** - Using `assert` style
- **BDD (Behavior-Driven Development)** - Using `expect` and `should` styles
- **Asynchronous Testing** - With callbacks, Promises, and async/await
- **API Testing** - Testing external API responses

## Getting Started 🚦

### Prerequisites 

- Node.js (v12 or higher recommended)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/reMRKableDev/node-testing-mocha-chai.git
   cd node-testing-mocha-chai
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running Tests

To run all tests:

```
npm test
```

To run tests for a specific example:

```
cd <subfolder-name>
npx mocha appTest.js
```

## Key Concepts Shown 🔑

1. **Function Testing**: Testing return values and types
2. **String Operations**: Case sensitivity and string comparison
3. **Asynchronous Operations**: Handling callbacks and file operations
4. **Promises**: Testing resolved and rejected promises
5. **Object Validation**: Checking object structure and properties
6. **API Testing**: Making real API calls and validating responses
7. **Test Organization**: Using `describe` and `it` blocks
8. **Different Assertion Styles**: Using multiple assertion approaches

## Best Practices Used ✅

- Using descriptive test names
- Organizing tests with nested `describe` blocks
- Using setup hooks like `before` and `beforeEach`
- Testing both happy paths and error cases
- Writing independent tests
- Using test caching for external resources
- Providing meaningful error messages
- Proper error handling in implementation code

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
