import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CategorySkeleton = () => {
  return (
    <>
        <div className="category-skeleton">
            <Skeleton width={"100%"} height={280}/>
        </div>
    </>
  )
}

export default CategorySkeleton
