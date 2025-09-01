import React from 'react';
import AffiliateLanding from './component/AffiliateLanding';
import HostninAffiliate from './component/HostninAffiliate';
import TestimonialSection from './component/TestimonialSection';
import AffiliateMarketing from './component/AffiliateMarketing';
import AffiliateProgram from './component/AffiliateProgram';



const page = () => {
    return (
        <div>
            <AffiliateLanding></AffiliateLanding>
            <HostninAffiliate></HostninAffiliate>
            <AffiliateMarketing></AffiliateMarketing>
            <TestimonialSection></TestimonialSection>
            <AffiliateProgram></AffiliateProgram>
         
        </div>
    );
};

export default page;