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
- **npm** or **yarn**

Then, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```
   or, if you're using Yarn:
   ```bash
   yarn install
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
         baseUrl: 'https://your-api-url.com',
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

### Run Specific Test Files
To run a specific test file, use the following command:
```bash
npx cypress run --spec "cypress/e2e/specs/users/<test-file-name>.cy.js"
```

Example:
```bash
npx cypress run --spec "cypress/e2e/specs/users/userCreationSpec.cy.js"
```

---

## Code Structure

The project is organized as follows:

### 1. **e2e Folder**
   - **data**: Contains JavaScript files for API endpoints, authentication, and test-specific data (e.g., user creation, deletion, etc.).
   - **specs**: Holds test cases grouped by feature (e.g., user creation, update, delete).
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
4. Expected output for validation is in `userCreationBaseline.json`.
