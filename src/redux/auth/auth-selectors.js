const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserEmail = state => state.auth.user.email;
const getIsBeingLoggedIn = state => state.auth.isBeingLoggedIn;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsBeingLoggedIn,
};

export default authSelectors;
