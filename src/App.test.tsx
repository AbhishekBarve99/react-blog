import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('App renders without crashing', () => {
  if (typeof window !== 'undefined') {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  }
});

describe('Test rendering of App component', () => {
  const appWrap = shallow(<App />);

  // snapshot
  it('Should match snapshot', () => {
    expect(appWrap).toMatchSnapshot();
  });
});
