import React from 'react';

// stateless!!  State only uses class!

const Header = (props) => {
    // do not use keword class, like regular css/html, for react, it 
    // must be className because class is a reserve keyword!
    return (
        <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
        </div>
    );
};

export default Header;