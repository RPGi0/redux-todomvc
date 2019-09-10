import { Map } from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function toggleComplete(state, itemId) {
  const itemIndex = state.get('todos').findIndex(
    (item) => item.get('id') === itemId
  );

  const updatedItem = state.get('todos')
    .get(itemIndex)
    .update('status', status => status === 'active' ? 'completed' : 'active');

  return state.update('todos', todos => todos.set(itemIndex, updatedItem));
}

function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

function findItemIndex(state, itemId) {
  return state.get('todos').findIndex(
    (item) => item.get('id') === itemId
  );
}

function toggleComplete(state, itemId) {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = state.get('todos')
    .get(itemIndex)
    .update('status', status => status === todos.set(itemIndex, updatedItem));

  return state.update('todos', todos => todos === todos.set(itemIndex, updatedItem));
}

function editItem(state, itemId) {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', true);

  return state.update('todos', todos => todos === todos.set(itemIndex, updatedItem));
}

function doneEditing(state, itemId, newText) {
  const itemIndex = findItemIndex(state, itemId);
  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', false)
    .set('text', newText);

  return state.update('todos', todos => todos === todos.set(itemIndex, updatedItem));
}



export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);

    case 'TOGGLE_COMPLETE':
      return toggleComplete(state, action.itemId);

    case 'CHANGE_FILTER':
      return changeFilter(state, action.filter);

    case 'EDIT_ITEM':
      return editItem(state, action.itemId);

    case 'CANCEL_EDITING':
      return cancelEditing(state, action.itemId);

    case 'DONE_EDITING':
      return editItem(state, action.itemId, action.newText);
  }
  return state;
}
