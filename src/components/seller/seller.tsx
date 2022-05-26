import React from 'react';
import { Link } from 'react-router-dom';

const Seller = () => {
    return (
        <div className="seller">
            <div className="chatchat_navi">
                <div>
                    <Link to="/article"><i className="xi-angle-left"></i></Link>
                    <span>Profile</span>
                </div>
                <div>
                    <span><i className="xi-ellipsis-v xi-x"></i></span>
                </div>
            </div>
            <div className="seller_info">
                <div>
                    <img src="./default1.png" alt="default" />
                </div>
                <div>
                    <span>Shin SSG</span>
                    <div>
                        <span><i className="xi-chip-o"></i></span>
                        <span>#8548214</span>
                    </div>
                </div>
            </div>
            <div className="seller_rate">
                <span>Manner</span>
                <div>
                    <span><i className="xi-star xi-x"></i></span>
                    <span><i className="xi-star xi-x"></i></span>
                    <span><i className="xi-star xi-x"></i></span>
                    <span><i className="xi-star xi-x"></i></span>
                    <span><i className="xi-star-o xi-x"></i></span>
                </div>
                <div>
                    <span>review</span>
                    <span>1000 case</span>
                </div>
            </div>
            <div className="seller_nei">
                <span>Note</span>
                <div>
                    <div>
                        <span>Unit C. No.5 (Last 30days)</span>
                    </div>
                    <div>
                        <span>Active within last 3days</span>
                    </div>
                    <div>
                        <span>Reg at 2022/05/19</span>
                    </div>
                    <div>
                        <span>색은 추후 변경</span>
                    </div>
                </div>
            </div>
            <div className="seller_list">
                <div>
                    <span>Another Itmes</span>
                    <span><i className="xi-angle-right"></i></span>
                </div>
                <div>
                    <span>Review</span>
                    <span><i className="xi-angle-right"></i></span>
                </div>
            </div>
        </div>
    )
}

// verified locations

export default Seller;