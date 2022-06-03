import React from "react";
import LocalGroup from "./group";
import LocalStore from "./localstore";
import LocalTopNavi from "./local_topnavi";

const Local = () => {
    return (
        <div className="local">
            <LocalTopNavi />
            <div className="local_filter">
                <div>
                    <span><i className="xi-filter"></i></span>
                </div>
                <div>
                    <span>Distance</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <div>
                    <span>Category</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <div>
                    <span>Rate</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
            </div>
            {/* <LocalGroup /> */}
            <LocalStore />
            

        </div>
    )
}

export default Local;