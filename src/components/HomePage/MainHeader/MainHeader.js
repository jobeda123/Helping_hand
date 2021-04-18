import React, { useState } from 'react';
import './MainHeader.css';
import { useSpring, animated } from 'react-spring';


const MainHeader = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});
    const prop1 = useSpring({ scroll: 100, from: { scroll: 0 } })

    return (
        <section className="mainHeader">
            <div className="row">
                <div className="mainHeader-text">
                    {/* <h1>We Are Always Here For You <br /> To Provide You Service</h1> */}
                    <animated.h1 style={props}>We Are Always Here For You <br /> To Provide You Service</animated.h1>
                    <h3 className="pt-5 op-1">We are ready to your help. <br /> At any time, at any place</h3>
                </div>
            </div>
        </section>
    );
};

export default MainHeader;