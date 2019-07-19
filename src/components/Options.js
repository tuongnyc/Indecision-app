import React from 'react';
import Option from './Option';

// Stateless
const Options = (props) => {
    return (
        <div>
        <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={props.handleDeleteOptions}>Remove All </button>
        </div>
        {props.options.length === 0 && <p className="widget__title">Please add an option to get started!</p>}
        {
            // render a new <p> tag for each option!
            // map not only give the individual element of the array,
            // but also the index.  The index is optional!
            props.options.map((option, index) => {
                return <Option key={option} 
                        optionText={option} 
                        count={index+1}
                        handleDeleteOption={props.handleDeleteOption}
                        />
            })
        }
        <Option />
        </div>
    );
};

export default Options;