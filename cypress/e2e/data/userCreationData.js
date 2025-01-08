import { endpoints } from './apiEndPoints';

class UserCreationData {
    createUser(payload) {
        return cy.request({
          method: 'POST',
          url: endpoints.users,
          body: payload,
          failOnStatusCode: false,
        });
      }
  
    validateAgainstBaseline(response, baseline) {
      expect(response.status).to.eq(baseline.status);

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
  
  export const userCreationData = new UserCreationData();
  