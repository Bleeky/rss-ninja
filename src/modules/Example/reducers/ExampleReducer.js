export default function exampleReducer(state = {
  message: 'Default redux message.',
}, action) {
  switch (action.type) {
    case 'UPDATE_EXAMPLE':
      return {
        message: 'Update of the message',
      };
    default:
      return state;
  }
}
