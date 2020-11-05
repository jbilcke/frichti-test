import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './app';

/**
 * Smoke tests
 */
describe('App', () => {
  it('renders without crashing (reactDOM)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing (enzyme)', () => {
    shallow(<App />);
  });
});
