import React from 'react';
import {shallow} from 'enzyme';
import CardHeaderComponent from './CardHeaderComponent';
import { findByTestAtrr } from '../../../Utils';

const setUp = (props={}) => {
   const component = shallow(<CardHeaderComponent {...props} />);
   return component;
}

 
describe("CardHeaderComponent Component", () => {

    let component;
    beforeEach(() => {
      component = setUp();
    }); 
   
    it("should render without errors",() => {
       const wrapper = findByTestAtrr(component, 'Cart');
       expect(wrapper.length).toBe(1);
    });
});


