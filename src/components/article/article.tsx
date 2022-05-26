import React from "react";

const Article =  () => {
    return (
        <div className="article">
            <div className="article_navi">
                <span><i className="xi-angle-left xi-x"></i></span>
                <span><i className="xi-ellipsis-v xi-x"></i></span>
            </div>
            <div className="article_lv1">
                <img src="./sample.jpg" alt="sample" />
            </div>
            <div className="article_lv2">
                <div className="article_lv21">
                    <span>Qwedna</span>
                    <div>
                        <span><i className="xi-map-o"></i></span>
                        <span>Unit C. No.5</span>
                    </div>
                </div>
                <div className="article_lv22">
                    <div>
                        <span><i className="xi-star"></i></span>
                        <span><i className="xi-star"></i></span>
                        <span><i className="xi-star"></i></span>
                        <span><i className="xi-star"></i></span>
                        <span><i className="xi-star-o"></i></span>
                    </div>
                    <div>
                        <span>review</span>
                        <span>(1000)</span>
                    </div>
                </div>
            </div>
            <div className="article_lv3">
                {/* <span>Selling camera almost brand new</span> */}
                <span>Selling camera almost brand</span>
                <div>
                    <div className="art_lv3_left">
                        <span>카테고리</span>
                        <div>
                            <span><i className="xi-time-o"></i></span>
                            <span>15min ago</span>
                        </div>
                    </div>
                    <div className="art_lv3_left">
                        <div>
                            <span><i className="xi-speech-o"></i></span>
                            <span>15</span>
                        </div>
                        <div>
                            <span><i className="xi-heart-o"></i></span>
                            <span>17</span>
                        </div>
                    </div>
                </div>
                <div className="article_lv31">
                    <div>
                        <span>1600</span>
                        <span>Peso</span>
                    </div>
                    <div>
                        <span><i className="xi-heart-o"></i></span>
                        <span>Chat</span>
                    </div>
                </div>
                <div>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
            </div>
            <div className="article_lv4">
                <div>
                    <span>Related Items</span>
                    <span><i className="xi-angle-right-min"></i></span>
                </div>
                <div>
                    <div className="article_related">
                        <div>
                            <img src="./iphone.jpg" alt="sample" />
                        </div>
                        <span>Selling iphone</span>
                        <span>5930 Peso</span>
                    </div>
                    <div className="article_related">
                        <div>
                            <img src="./iphone.jpg" alt="sample" />
                        </div>
                        <span>Selling iphone</span>
                        <span>5930 Peso</span>
                    </div>
                    <div className="article_related">
                        <div>
                            <img src="./iphone.jpg" alt="sample" />
                        </div>
                        <span>Selling iphone</span>
                        <span>5930 Peso</span>
                    </div>
                    <div className="article_related">
                        <div>
                            <img src="./iphone.jpg" alt="sample" />
                        </div>
                        <span>Selling iphone</span>
                        <span>5930 Peso</span>
                    </div>
                    <div className="article_related">
                        <div>
                            <img src="./iphone.jpg" alt="sample" />
                        </div>
                        <span>Selling iphone</span>
                        <span>5930 Peso</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Article;