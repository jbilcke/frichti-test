import actions from 'constants/actions/simple-action';

export const defaultState = {
  data: {},
};

export default function simpleAction(state = defaultState, action) {
  switch (action.type) {
  case actions.SIMPLE_ACTION:
    return {
      data: action.payload,
    };
  default:
    return state;
  }
}
