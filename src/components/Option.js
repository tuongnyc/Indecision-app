import React from 'react';


// stateless.  Stateless uses function, so it will be more faster and 
// more efficient
const Option = (props) => {
    if(props.optionText) {
        return (
            <div className="option">
                <p className="option__text">{props.count}. 
                {props.optionText} </p>
                <button className="button button--link" onClick={() => {
                    props.handleDeleteOption(props.optionText);
                }}>Remove</button>
            </div>
        )  
    }
    else
    return (
        <div></div>
    );
};

export default Option;
