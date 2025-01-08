import { userRetrivalData } from '../../data/userRetrievalData';

describe('User Retrieval Tests', () => {
  let userPayload;
  let userBaseline;

  beforeEach(() => {
    cy.fixture('payload/userRetrievalPayload').then((payload) => {
      userPayload = payload;
    });
    cy.fixture('baseline/userRetrievalBaseline').then((baseline) => {
      userBaseline = baseline;
    });
  });

  it('1 - Should retrieve a list of users for a valid page and match the baseline', function () {
    userRetrivalData.getUsers(userPayload.validPage.page, userPayload.validPage.per_page ).then((response) => {
      userRetrivalData.validateAgainstBaseline(response,userBaseline);
      expect(response.body.data).to.have.lengthOf(userPayload.validPage.per_page);
      userRetrivalData.validateAgainstBaseline(response, userBaseline);
    });
  });

  it('2 - Should return an empty list for an invalid page', function () {
    userRetrivalData.getUsers(userPayload.invalidPage.page, userPayload.invalidPage.per_page).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an('array');
      expect(response.body.data.length).to.eq(0);    
    });
  });
});
