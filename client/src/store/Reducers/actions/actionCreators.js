export const actionType = (actionType, action) => {
    return {
      type: actionType,
      error: action
    }
  };