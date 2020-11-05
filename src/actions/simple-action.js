import actions from 'constants/actions/simple-action';

const simpleAction = () => (dispatch) => {
  dispatch({
    type: actions.SIMPLE_ACTION,
    payload: 'simple_action',
  });
};

export default { simpleAction };
