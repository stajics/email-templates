import { createStore } from "redux";
// import rootReducer from "../reducers/index";

const initialState = {
  stats: {
    totalLeads: 120,
    totalLeadsPercentage: "+10%",
    totalEmailsOpened: 100,
    totalEmailsOpenedPercentage: "+9%",
    emailOpenRate: "88%",
    emailOpenRatePercentage: "+8.9%"
  },
  connectedAccounts: {
    connectedGmailAccounts: [],
    connectedFacebookAccounts: []
  },
  // emailTemplates: {
  //   connectedGmailAccountId: "",
  //   connectedFacebookAccountId: "",
  //   connectedFacebookFormId: "",
  //   behaviour: "",
  //   createdOn: "",
  //   noOfEmailsSent: 10,
  //   noOfEmailsOpened: 7
  // }
  emailTemplates: {
    selectedTemplateId: 'RealEstateForm2Gmail1', 
    templates: [{
      id: 'RealEstateForm2Gmail1',
      createdOn: 'Nov, 02 2017',
      noOfEmailsSent: 10,
      noOfEmailsOpened: 7,
      connectedGmailAccountId: "",
      connectedFacebookAccountId: "",
      connectedEmail: 'email@gmail.com',
      behaviour: 'Sends right away',
      title: 'Title of this email goes here',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }, {
      id: 'RealEstateForm2Gmail2',
      createdOn: 'Nov, 02 2017',
      noOfEmailsSent: 100,
      noOfEmailsOpened: 7,
      connectedGmailAccountId: "",
      connectedFacebookAccountId: "",
      connectedEmail: 'email@gmail.com',
      behaviour: 'Sends right away',
      title: 'Title of this email goes here',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }]
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_TEMPLATE':
      return {
        ...state,
        emailTemplates: {
          ...state.emailTemplates,
          selectedTemplateId: action.payload.templateId,
        }
      };
  }
  return state;
};

const store = createStore(rootReducer);

export default store;
