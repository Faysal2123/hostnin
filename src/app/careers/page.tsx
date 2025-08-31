import React from 'react';
import JobsSection from './component/JobsSection';
import JobApplication from './component/JobApplication';
import JobOpenings from './component/JobOpenings';

const page = () => {
    return (
        <div>
            <JobsSection></JobsSection>
            <JobApplication></JobApplication>
            <JobOpenings></JobOpenings>
        </div>
    );
};

export default page;