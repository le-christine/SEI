import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('updates state when updateSelectedFeature is called', () => {
  const wrapper = shallow(<App />);
	wrapper.instance().updateSelectedFeature({ currentTarget: { value: 'dog-pics' }});
  expect(wrapper.state().selectedFeature).toBe('dog-pics');
});

it('updates state when the select element changes', () => {
  const wrapper = shallow(<App />);
  const select = wrapper.find('select');
  select.simulate('change', { currentTarget: { value: 'dog-pics' } });
  expect(wrapper.state().selectedFeature).toBe('dog-pics');
});
