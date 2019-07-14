import React from 'react';
import LeftMenuComponent from '../LeftMenu/LeftMenuComponent';
import ProductComponent from '../ProductComponent/ProductComponent';
import styled from 'styled-components';

const Container = styled.div`
    height: calc(100vh - 101px);
    width: 100%;
`;

const Section = styled.div`
   padding: 0 !important;
`;

const SectionContainer = styled.div`
  margin:0 !important;
`;

const MainComponent = () => {

    return (
        <Container>
            <SectionContainer className="row">
                <Section className="col-md-3">
                    <LeftMenuComponent />
                </Section>

                <Section className="col-md-9">
                        <ProductComponent />
                </Section>
            </SectionContainer>
        </Container>
    );
}

export default MainComponent;