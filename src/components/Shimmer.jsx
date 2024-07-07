import React from 'react'
import CardShimmer from './CardShimmer';

const Shimmer = () => {
    return (
        <div className="hero_shimmer">
            <div className="search_shimmer">
            </div>
            <div className="buttons_shimmer">
                <button
                    className="filter-btn_shimmer"
                >
                </button>
            </div>
            <div className="card-grid_shimmer">
              {
                Array(20).fill(<CardShimmer/>)
              }
            </div>
        </div>
    )
}

export default Shimmer;