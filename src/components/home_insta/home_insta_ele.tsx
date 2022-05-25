import React from "react";

const HomeInstaEle = () => {
    return (
        <div className="insta_ele">
            <div className="insta_ele_lv1">
                <img src="./sample.jpg" alt="sample" />
                <div>
                    <span><i className="xi-time-o"></i></span>
                    <span>15min ago</span>
                </div>
            </div>
            <div className="insta_ele_lv2">
                <span>Selling camera almost brand new</span>
            </div>
            <div className="insta_ele_lv4">
                <div>
                    <div>
                        <span><i className="xi-heart-o"></i></span>
                        <span>51</span>
                    </div>
                    <div>
                        <span><i className="xi-speech-o"></i></span>
                        <span>12</span>
                    </div>
                </div>
                <div>
                    <span><i className="xi-map-o"></i></span>
                    <span>Unit C. No.5</span>
                </div>
            </div>
            <div className="insta_ele_lv3">
                <div>
                    <span>1500</span>
                    <span>Peso</span>
                </div>
            </div>
            
        </div>
    )
}

export default HomeInstaEle;