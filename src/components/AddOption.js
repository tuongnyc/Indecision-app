import React from 'react';

// can export the class default!

// 
export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
     
    // getting rid of the constructor to set up class properties.
    // class properties uses arrow function so that it will be
    // useful for event handler!!
    
  /*  constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        /*this.state = {
            error: undefined
        } 
    } */

    // set up a method!  ES 6 support arrow function!.
    handleAddOption = (event) => {
        event.preventDefault();  // stop the full page refresh!!
            
        // event.target is the form!
        const option = event.target.elements.option.value.trim();
        // list of elements by name, so pull the named option value
        
        const error = this.props.handleAddOption(option);  // call the parent!
        
        /*this.setState(() => {
            return {
                error: error  // ES6, with same name we can shortcut error => error: error
            }
        })*/

        this.setState(() => ({error: error}));
        // clearing the input text box!

        //if there is an error, do not clear out input!
        if(!error)
            event.target.elements.option.value = ''; 
    } 

    render() {
        return (
            <div>
            {
                this.state.error && <p className="add-option-error">{this.state.error}</p>
            }
            <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input" type="text" name="option" id="option"></input>
                <button className="button">Add Option</button>
            </form>
            </div>
        );
    }
};