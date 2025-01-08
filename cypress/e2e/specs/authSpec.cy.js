import { authData} from '../data/authData';

describe('POST /login - Auth Tests', () => {
  let authPayload;
  beforeEach(() => {
    cy.fixture('payload/authPayload').then((payload) => {
      authPayload = payload;
    });
  });
    
  it('1 - Should return a token for valid credentials', function () {
    authData.login(authPayload.validLogin).then((response) => {
      authData.validateBaseline(response, {
        status: 200,
        body: { token: Cypress.sinon.match.string }
      });
    });
  });

  it('2 - Should return an error for invalid credentials', function () {
    authData.login(authPayload.invalidLogin).then((response) => {
      authData.validateBaseline(response, {
        status: 400,
        body: { error: 'user not found' }
      });
    });
  });

  it('3 - Should return an error for missing password', function () {
    authData.login(authPayload.missingPassword).then((response) => {
      authData.validateBaseline(response, {
        status: 400,
        body: { error: 'Missing password' }
      });
    });
  });

  it('4 - Should return an error for missing email', function () {
    authData.login(authPayload.missingEmail).then((response) => {
      authData.validateBaseline(response, {
        status: 400,
        body: { error: 'Missing email or username' }
      });
    });
  });

  it('5 - Should return an error for empty fields', function () {
    authData.login(authPayload.emptyFields).then((response) => {
      authData.validateBaseline(response, {
        status: 400,
        body: { error: 'Missing email or username' }
      });
    });
  });
});
