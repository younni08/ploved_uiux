import React from "react";

const HomeEle = () => {
    return (
        <div className="home_ele">
            <div>
                <div className="home_ele_left">
                    <img src="./sample.jpg" alt="sample" />
                </div>
                <div className="home_ele_right">
                    <div>
                        <div>
                            <span>Selling camera</span>
                        </div>
                        <div>
                            <span>Unit C. No.5</span>
                            <span><i className="xi-time-o"></i> 15min ago</span>
                        </div>
                        <div>
                            <span>1500 Peso</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span><i className="xi-heart-o"></i></span>
                            <span>215</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeEle;