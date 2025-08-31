import React from 'react';

import TestimonialSection from './component/TestimonialSection';
import PartnersSection from './component/PartnersSection';
import ControlPanelSection from '../pricing/component/ControlPanelSection';
import PricingTab from './component/PricingTab';

const page = () => {
    return (
        <div>
            <PricingTab></PricingTab>
            <TestimonialSection></TestimonialSection>
            <PartnersSection></PartnersSection>
            <ControlPanelSection></ControlPanelSection>
         
            
        </div>
    );
};

export default page;