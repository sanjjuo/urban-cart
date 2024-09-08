import React from 'react'
import Skeleton from 'react-loading-skeleton'

const CardSkeleton = ({ cards }) => {
    return (
        <>
            {Array(cards).fill(0).map((_, index) => (
                <div className="card-skeleton" key={index}>
                    <div className="image-skeleton">
                        <Skeleton width={"100%"} height={350} />
                    </div>
                    <div className="detail-skeleton" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Skeleton count={2} style={{ width: "270px" }} />
                        <Skeleton circle width={25} height={25} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardSkeleton
