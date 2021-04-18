import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-4">
            <h5 className="text-white">{props.menuTitle}</h5>
            <div className="mt-4 left">
                 {
                     props.menuItems.map((item, index) => <h6 className="text-dark" key={index}>{item.name}</h6>)
                 }
            </div>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;