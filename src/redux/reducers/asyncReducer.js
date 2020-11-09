const initialState = {
  userData: {},
  repoData: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return Object.assign({}, state, {
        isFetching: true,
        userData: {},
        repoData: {},
        isError: false
      });
    case "FETCHED_USER":
      return Object.assign({}, state, {
        userData: action.data,
        repoData: action.data,
        isFetching: false,
        isError: false
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    case "FETCHED_REPOS":
      Object.assign({}, state, {
        userData: action.data,
        repoData: action.data,
        isFetching: false,
        isError: false
      });
    default:
      return state;
  }
};

export default asyncReducer;
