import React from "react";
import { Link } from "react-router-dom";

const LocalTopNavi = () => {
    return (
        <div className="local_top">
            <div>
                <Link to="/"><i className="xi-arrow-left"></i></Link>
                <div>
                    <span>Unit C. No.5</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <span></span>
            </div>
            <div>
                <span className="on">Best Pick</span>
                <span>Group</span>
                <span>Local Store</span>
            </div>
        </div>
    )
}

export default LocalTopNavi;