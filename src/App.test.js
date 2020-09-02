import React from 'react';
import ReactDOM from 'react-dom';
import AppX from './App';

test('renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppX/>,div);
  ReactDOM.unmountComponentAtNode(div);
});
