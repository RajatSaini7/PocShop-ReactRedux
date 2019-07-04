import React from 'react';
import './MainComponent.css';
import LeftMenuComponent from '../LeftMenu/LeftMenuComponent';
import ProductComponent from '../ProductComponent/ProductComponent';


const MainComponent = () => {

    return (
        <div className="mapper">
            <div className="row no-row">
                <div className="col-md-3 no-cover">
                    <LeftMenuComponent />
                </div>

                <div className="col-md-9 no-cover">
                        <ProductComponent />
                </div>
            </div>
        </div>
    );
}

export default MainComponent;