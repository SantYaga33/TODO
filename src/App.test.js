import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Ui/TodoList/TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
