import React from 'react';
import {shallow} from 'enzyme';
import SearchBoxComponent from './SearchBoxComponent';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props={}) => {
   const component = shallow(<SearchBoxComponent {...props} />);
   return component;
}

 
describe("SearchBox Component", () => {

    let component;
    beforeEach(() => {
      component = setUp();
    }); 
   
    it("should render without errors",() => {
       const wrapper = findByTestAtrr(component, 'SearchBox');
       expect(wrapper.length).toBe(1);
    });
});


