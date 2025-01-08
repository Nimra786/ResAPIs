import { endpoints } from './apiEndPoints';
class UserDeleteData {
    deleteUser(userId) {
        return cy.request({
          method: 'DELETE',
          url: `${endpoints.users}/${userId}`,
          failOnStatusCode: true,
        });
      }
  
      validateAgainstBaseline (response, baseline) {
        expect(response.status).to.eq(baseline.status, `Expected status ${baseline.status}`);
      
        const responseBody = response.body;
      
        if (response.status === 204) {
          expect(responseBody).to.be.empty;
        } else {
          const expectedStructure = baseline.responseStructure;
          
          if (expectedStructure.body) {
            Object.keys(expectedStructure.body).forEach((key) => {
              if (expectedStructure.body[key] instanceof RegExp) {
                expect(responseBody[key]).to.match(expectedStructure.body[key]);
              } else {
                expect(responseBody[key]).to.eq(expectedStructure.body[key]);
              }
            });
          }
        }
      };   
  };
  
  export const userDeleteData = new UserDeleteData();
  
