import React from 'react';
import HomeNavi from '../home/home_navi';
import HomeInstaEle from './home_insta_ele';

const HomeInsta = () => {
    return (
        <div className="insta">
            <HomeNavi />
            <div className="insta_list">
                <HomeInstaEle />
                <HomeInstaEle />
                <HomeInstaEle />
                <HomeInstaEle />
                <HomeInstaEle />
            </div>
        </div>
    )
}

export default HomeInsta;