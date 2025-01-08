import { userCreationData } from '../../data/userCreationData';

describe('User Creation Tests', () => {
  let userPayload;
  let userBaseline;

  beforeEach(() => {
    cy.fixture('payload/userCreationPayload').then((payload) => {
      userPayload = payload;
    });
    cy.fixture('baseline/userCreationBaseline').then((baseline) => {
      userBaseline = baseline;
    });
  });

  it('1 - Should create a new user successfully with valid payload', () => {
    userCreationData.createUser(userPayload.validPayload).then((response) => {
      userCreationData.validateAgainstBaseline(response, userBaseline);
    });
  });
});
