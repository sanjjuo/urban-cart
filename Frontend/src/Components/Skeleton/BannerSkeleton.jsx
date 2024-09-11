import React from 'react';
import Skeleton from 'react-loading-skeleton';

const BannerSkeleton = () => {
    return (
        <>
            <div className="banner-skeleton">
                <Skeleton width={"100%"} height={900}/>
            </div>
        </>
    )
}

export default BannerSkeleton
