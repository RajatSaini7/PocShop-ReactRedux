import React from 'react';
import {shallow} from 'enzyme';
import HeaderComponent from './HeaderComponent';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props={}) => {
   const component = shallow(<HeaderComponent {...props} />);
   return component;
}

 
describe("Header Component", () => {

    let component;
    beforeEach(() => {
      component = setUp();
    }); 
   
    it("should render without errors",() => {
       const wrapper = findByTestAtrr(component, 'Header-Component');
       expect(wrapper.length).toBe(1);
    });

    it("should render a heading",() => {
        const heading = findByTestAtrr(component, 'Heading');
        expect(heading.length).toBe(1);
    });
});


