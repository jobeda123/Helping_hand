import React from 'react';
import './MainHeader.css';


const MainHeader = () => {
    return (
        <section className="mainHeader">
            <div className="row">
                <div className="mainHeader-text">
                    <h1>Your Personal Assistant</h1>
                    <h5 className="pt-3">We are here for your help. <br/> At any time, at any place</h5>
                </div>
            </div>
        </section>
    );
};

export default MainHeader;