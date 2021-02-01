const getIsloggedIn = state => state.auth.isLoggedIn;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsloggedIn,
  getUsername,
};

export default authSelectors;
