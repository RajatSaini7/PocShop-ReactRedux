const getReducer = (prevState, action) => {
  switch(action.type) {
      case 'GET_MESSAGE' :
           return action.payload;
      default : 
      return prevState;
  }
};

