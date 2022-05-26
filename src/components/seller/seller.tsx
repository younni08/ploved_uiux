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

        </div>
    )
}

export default Seller;