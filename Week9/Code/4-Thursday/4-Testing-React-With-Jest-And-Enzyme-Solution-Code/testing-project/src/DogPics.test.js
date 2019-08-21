import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DogPics from './DogPics';

Enzyme.configure({ adapter: new Adapter() });

describe ('DogPics component', () => {
  const mockSuccessResponse = {"message":["maltese","retriever","terrier"],"status":"success"};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  const wrapper = shallow(<DogPics />);

  it('has a title', () => {
    expect(wrapper.find('h1').text()).toBe('Dog Pics!');
  })

  it('calls componentDidMount', () => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://dog.ceo/api/breeds/list/random/3');
    expect(wrapper.state().initialBreeds.length).toBe(3);
    global.fetch.mockClear(); 
  })

  it('populates itself with buttons', () => {
    expect(wrapper.find('button').length).toBe(3);
  })

  it('loads an image when a button is clicked', () => {
    const mockSuccessResponse = { message: "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg", status: "success" };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    wrapper.find('button').first().simulate('click');

    process.nextTick(() => {
      expect(wrapper.state().dogPicURL).toBe( "https://images.dog.ceo/breeds/cairn/n02096177_5206.jpg");
      expect(wrapper.find('img').prop('src')).toBeDefined();
    })

    global.fetch.mockClear(); 
  })

});
