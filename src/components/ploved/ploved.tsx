import React from "react";
import HomeEle from "../home/home_ele";
import PlovedCate from "./ploved_cate";

const Ploved = () => {
    return (
        <div className="ploved">
            <div className="ploved_top">
                <div>
                    <span><i className="xi-arrow-left"></i></span>
                    <div>
                        <span>Unit C. No.5</span>
                        <span><i className="xi-angle-down-min"></i></span>
                    </div>
                    <span></span>
                </div>
            </div>
            <PlovedCate />
            <div className="ploved_list">
                <HomeEle />
                <HomeEle />
                <HomeEle />
                <HomeEle />
                <HomeEle />
                <HomeEle />
            </div>
        </div>
    )
}

export default Ploved