const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  const newState = { ...state }; //... spread syntax

  switch (action.type) {
    case "COUNTER_UP_ASYNC":
      newState.count += action.value;
      break;

    case "COUNTER_DOWN":
      newState.count -= action.value;
      break;
  }
  return newState;
};

export default reducer;
