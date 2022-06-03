import React from "react";
import { Link } from "react-router-dom";
import HomeEle from "../home/home_ele";
import PlovedCate from "./ploved_cate";

const Ploved = () => {
    return (
        <div className="ploved">
            <div className="ploved_top">
                <div>
                    <Link to="/"><i className="xi-arrow-left"></i></Link>
                    <div>
                        <span>Unit C. No.5</span>
                        <span><i className="xi-angle-down-min"></i></span>
                    </div>
                    <span></span>
                </div>
            </div>
            {/* <PlovedCate /> */}
            <div className="ploved_bar">
                <div>
                    <span className="on">All items</span>
                    <span>Sell</span>
                    <span>Buy</span>
                </div>
                <span className="offf">Category</span>
            </div>
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