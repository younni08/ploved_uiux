import React from "react";
import LocalGroup from "./group";
import LocalTopNavi from "./local_topnavi";

const Local = () => {
    return (
        <div className="local">
            <LocalTopNavi />
            <LocalGroup />
            <div className="local_fav">
            <div>
                <span>Best Picks</span>
                <div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <img src="./temp1.webp" alt="img" />
                    </div>
                    <div>
                        <span>best items</span>
                        <div>
                            <div><img src="./default1.png" alt="t" /></div>
                            <span>daiso</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="./temp1.webp" alt="img" />
                    </div>
                    <div>
                        <span>best items</span>
                        <div>
                            <div><img src="./default1.png" alt="t" /></div>
                            <span>daiso</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src="./temp1.webp" alt="img" />
                    </div>
                    <div>
                        <span>best items</span>
                        <div>
                            <div><img src="./default1.png" alt="t" /></div>
                            <span>daiso</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
    )
}

export default Local;