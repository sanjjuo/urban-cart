import React from 'react';
import Skeleton from 'react-loading-skeleton';

const BlogSkeleton = ({ blog }) => {
    return (
        <>
            {Array(blog).fill(0).map((_, index) => (
                <div className="blog-skeleton" key={index}>
                    <Skeleton width={"100%"} height={450} />
                    <Skeleton count={2} />
                </div>
            ))}
        </>
    );
}

export default BlogSkeleton;
