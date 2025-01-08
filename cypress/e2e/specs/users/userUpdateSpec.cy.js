import { userUpdateData } from '../../data/userUpdateData';
import { userRetrivalData } from '../../data/userRetrievalData';


describe('User Update Tests', () => {
  let userPayload;
  let userBaseline;
  let userIds;

  beforeEach(() => {
    cy.fixture('payload/userRetrievalPayload').then((payload) => {
      userRetrivalData.getUsers(payload.validPage.page, payload.validPage.per_page ).then((response) => {
        userIds = response.body.data.map((user) => user.id)
       });
    });

    cy.fixture('payload/userUpdatePayload').then((payload) => {
      userPayload = payload;
    });
    cy.fixture('baseline/userUpdateBaseline').then((baseline) => {
      userBaseline = baseline;
    });
});

  it('1 - Should update user details successfully with valid payload', () => {
    userUpdateData.updateUser(userPayload.validPayload, userIds[0]).then((response) => {
      userUpdateData.validateAgainstBaseline(response, userBaseline);
    });
  });
});
