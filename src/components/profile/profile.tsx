import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile_navi">
                <span>Ploved</span>
                <span><i className="xi-cog"></i></span>
            </div>
            <div className="profile_info">
                <div>
                    <img src="./default1.png" alt="default" />
                </div>
                <div>
                    <div>
                        <span>Qwedna</span>
                        <div className="common_map">
                            <span><i className="xi-map-o"></i></span>
                            <span>Unit C. No.5</span>
                        </div>
                    </div>
                    <span><i className="xi-angle-right"></i></span>
                </div>
            </div>
            <div className="profile_history">
                <div>
                    <span><i className="xi-document"></i></span>
                    <span>Trade History</span>
                </div>
                <div>
                    <span><i className="xi-heart"></i></span>
                    <span>Fav Items</span>
                </div>
            </div>
            <div className="profile_list">
                <span>Neighborhood</span>
                <div>
                    <span><i className="xi-maker"></i></span>
                    <span>Neighborhood Setting</span>
                </div>
                <div>
                    <span><i className="xi-gps"></i></span>
                    <span>Verify My Neighborhood</span>
                </div>
            </div>
            <div className="profile_list">
                <span>Business</span>
                <div>
                    <span><i className="xi-shop"></i></span>
                    <span>Create Business Accout</span>
                </div>
                <div>
                    <span><i className="xi-cart-o"></i></span>
                    <span>Post Local Ad</span>
                </div>
            </div>
        </div>
    )
}

export default Profile