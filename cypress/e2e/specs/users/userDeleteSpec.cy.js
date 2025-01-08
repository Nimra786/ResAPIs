import { userDeleteData, userUpdateData } from '../../data/userDeleteData';
import { userRetrivalData } from '../../data/userRetrievalData';

describe('User Delete Tests', () => {
  let userBaseline;
  let userIds;

  beforeEach(() => {
    cy.fixture('payload/userRetrievalPayload').then((payload) => {
      userRetrivalData.getUsers(payload.validPage.page, payload.validPage.per_page ).then((response) => {
        userIds = response.body.data.map((user) => user.id)
       });
    });

    cy.fixture('baseline/userDeleteBaseline').then((baseline) => {
      userBaseline = baseline;
    });
  });

  it('1 - Should update user details successfully with valid payload', () => {
    userDeleteData.deleteUser(userIds[0]).then((response) => {
      userDeleteData.validateAgainstBaseline(response, userBaseline);
    });
  });
});
