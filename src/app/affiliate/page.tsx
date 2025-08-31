import React from 'react';
import AffiliateLanding from './component/AffiliateLanding';
import HostninAffiliate from './component/HostninAffiliate';
import TestimonialSection from './component/TestimonialSection';
import AffiliateMarketing from './component/AffiliateMarketing';
import AffiliateProgram from './component/AffiliateProgram';
import NewsletterSection from './component/NewsletterSection';


const page = () => {
    return (
        <div>
            <AffiliateLanding></AffiliateLanding>
            <HostninAffiliate></HostninAffiliate>
            <AffiliateMarketing></AffiliateMarketing>
            <TestimonialSection></TestimonialSection>
            <AffiliateProgram></AffiliateProgram>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default page;