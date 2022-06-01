import React from 'react';
import HomeNavi from '../home/home_navi';
import HomeInstaEle from './home_insta_ele';

const HomeInsta = () => {
    return (
        <div className="insta">
            <HomeNavi />
            <div className="insta_list">
                <div className="insta_cate">
                    <div>
                        <span>Pre-Loved</span>
                        <span>loved before &</span>
                        <span>loved after</span>
                        {/* <img src="./love.jpg" alt="love" /> */}
                        <img src="./temp3.webp" alt="love" />
                    </div>
                    <div>
                        <span>Local Store</span>
                        <span>explore Store</span>
                        <span>Near by</span>
                        <img src="./temp1.webp" alt="love" />
                    </div>
                </div>
                <div className="insta_ad">
                    <span>광고</span>
                </div>
                <div className="insta_temp">
                    <div>
                        <span>Pre-loved item</span>
                        <div>
                            <span>See all</span>
                            <span><i className="xi-angle-right-min"></i></span>
                        </div>
                    </div>
                    <div>
                        <div className="insta_temp_ele">
                            <div>
                                <img src="./default1.png" alt="default" />
                                <span><i className="xi-heart-o"></i></span>
                            </div>
                            <div>
                                <span>selling old image</span>
                                <div>
                                    <span>PHP 3,5000</span>
                                    <div>
                                        <span><i className="xi-time-o"></i></span>
                                        <span>1w ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* <div className="home_insta_list">
                    <HomeInstaEle />
                    <HomeInstaEle />
                    <HomeInstaEle />
                    <HomeInstaEle />
                    <HomeInstaEle />
                </div> */}
            </div>
        </div>
    )
}

export default HomeInsta;