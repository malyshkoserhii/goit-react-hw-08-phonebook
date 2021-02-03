const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;
const getIsBeingLoggedIn = state => state.auth.isBeingLoggedIn;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsBeingLoggedIn,
};

export default authSelectors;
