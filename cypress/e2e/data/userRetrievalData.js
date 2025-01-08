import { endpoints } from './apiEndPoints';

class UserRetrivalData {
  getUsers(page,per_page) {
    return cy.request({
      method: 'GET',
      url: `${endpoints.users}?page=${page}&per_page=${per_page}`,
      failOnStatusCode: true,
    });
  }

  validateAgainstBaseline(response, baseline) {
    this.validateStatusCode(response.status, baseline.status);
  
    const responseBody = response.body;
    const expectedStructure = baseline.responseStructure;
  
    Object.keys(expectedStructure).forEach((key) => {
      if (key === 'data' && Array.isArray(expectedStructure[key])) {
        this.validateJsonArray(responseBody[key], expectedStructure[key][0]);
      } else if (typeof expectedStructure[key] === 'string') {
        this.validateEachField(responseBody, key, expectedStructure[key]);
      }
    });
  }
  
  validateStatusCode(actualStatus, expectedStatus) {
    expect(actualStatus).to.eq(expectedStatus, `Expected status ${expectedStatus} but got ${actualStatus}`);
  }
  
  validateEachField(responseBody, key, expectedType) {
    expect(responseBody).to.have.property(key).that.is.a(expectedType, `Expected ${key} to be of type ${expectedType}`);
  }
  
  validateJsonArray(actualArray, expectedItemStructure) {
    expect(actualArray).to.be.an('array', `Expected an array but got ${typeof actualArray}`);
    actualArray.forEach((item, index) => {
      this.validateObjectInsideArray(item, expectedItemStructure, `Array item at index ${index}`);
    });
  }
  
  validateObjectInsideArray(actualObject, expectedStructure, context = 'Object') {
    Object.keys(expectedStructure).forEach((field) => {
      const expectedType = expectedStructure[field];
      expect(actualObject).to.have.property(field).that.is.a(
        expectedType,
        `Expected ${context}.${field} to be of type ${expectedType}`
      );
    });
  }
}

export const userRetrivalData = new UserRetrivalData();