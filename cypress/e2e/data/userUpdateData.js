import { endpoints } from './apiEndPoints';

class UserUpdateData {
    updateUser(payload, userId) {
      return cy.request({
        method: 'PUT',
        url: `${endpoints.users}/${userId}`,
        body: payload,
        failOnStatusCode: false 
      });
    }
  
    validateAgainstBaseline(response, baseline) {
      expect(response.status).to.eq(baseline.status, `Expected status ${baseline.status}`);
  
      const responseBody = response.body;
      const expectedStructure = baseline.responseStructure;
  
      Object.keys(expectedStructure).forEach((key) => {
        const expectedType = expectedStructure[key];
        expect(responseBody).to.have.property(key).that.is.a(
          expectedType,
          `Expected property '${key}' to be of type '${expectedType}'`
        );
      });
    }
  }
  
  export const userUpdateData = new UserUpdateData();
  