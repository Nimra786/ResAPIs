import { endpoints } from './apiEndPoints';

class AuthData {
  login(payload) {
    return cy.request({
      method: 'POST',
      url: endpoints.login,
      body: payload,
      failOnStatusCode: false    
    });
  }

  validateBaseline(response, expected) {

    expect(response.status).to.eq(expected.status);
    Object.keys(expected.body).forEach((key) => {
      if (expected.body[key] === Cypress.sinon.match.string) {
        expect(response.body).to.have.property(key).that.is.a('string');
      } else {
        expect(response.body).to.have.property(key, expected.body[key]);
      }
    });
  }
}

export const authData = new AuthData();
