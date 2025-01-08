# Cypress E2E Testing Framework

This project is a Cypress-based end-to-end (E2E) testing framework designed for API testing and frontend interaction. The folder structure, data organization, and configuration are all tailored to streamline the testing process.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Code Structure](#code-structure)
- [Contributing](#contributing)

---

## Installation

To get started, make sure you have the following installed on your machine:

- **Node.js** (v16 or higher recommended)
- **npm**

Then, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Nimra786/ResAPIs.git
   cd ResAPIs
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```
---

## Setup

Before running the tests, ensure that:

1. **Configuration**:
   - Update the `cypress.config.js` file with the base URL and other necessary configurations for your environment.
   - Example:
     ```javascript
     module.exports = {
         e2e: {
            supportFile: false,
            baseUrl: 'https://reqres.in',
            setupNodeEvents(on, config) {
            },
         },
     };
     ```

2. **API Endpoints & Test Data**:
   - All endpoints are defined in `e2e/data/apiEndPoints.js`.
   - Authentication data and payloads are available in `e2e/data/authData.js` and related `payload` JSON files.

3. **Fixtures**:
   - Baseline and payload data for tests are stored in `fixtures/baseline` and `fixtures/payload`.

---

## Running Tests

### Run All Tests
To run all E2E tests:
```bash
npx cypress run
```

### Open Cypress Test Runner
To open the interactive test runner:
```bash
npx cypress open
```

### Run Specific Test Files in Headless Mode
To run a specific test file, use the following command:
```bash
npx cypress run --spec "cypress/e2e/specs/users/<test-file-name>.cy.js"
```

Example:
```bash
npx cypress run --spec "cypress/e2e/specs/users/userCreationSpec.cy.js"
```

---

## Reporter Configuration

- The project is configured to use the **Mochawesome** reporter for Cypress test runs.
- Reports are generated in JSON format and saved in the following directory:
  ```
  cypress/reports/
  ```
  Example: `cypress/reports/mochawesome_001.json`

---

## Running Tests and Generating Reports

To execute all test specs and generate a report:

1. Run the following command:
   ```bash
   npx cypress run
   ```

2. After the tests are completed, the Mochawesome report files will be saved in the `cypress/reports/` directory.

---

## Code Structure

The project is organized as follows:

### 1. **e2e Folder**
   - **data**: Contains Test files for API endpoints
   - **specs**: Contain TestCases for each endpoint
   - **fixtures**: Stores reusable JSON files for baseline comparison and API payloads.
     - `baseline`: Expected responses for validation.
     - `payload`: Input payloads for API testing.

### 2. **Key Files**
   - `cypress.config.js`: The main configuration file for the Cypress framework.
   - `README.md`: Project documentation (you're reading it!).

### Example Workflow
For a test case such as **User Creation**:
1. The API endpoint is defined in `apiEndPoints.js`.
2. Test data is stored in `userCreationData.js` and `userCreationPayload.json`.
3. The test spec is written in `userCreationSpec.cy.js`.
4. Expected output for JSON validation is in `userCreationBaseline.json`.
