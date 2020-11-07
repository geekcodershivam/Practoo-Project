import React from 'react';
import './Features.css';
import FeatureData from '../../Data/FeatureData';
import FeatureCard from './FeatureCard';

const Features = () => {
    const features = FeatureData;
    return (
        <div className="feature-area">
            <div className="container">
                <div className="row mt-5">
                    {
                        features.map(ft=><FeatureCard feature={ft}></FeatureCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Features;