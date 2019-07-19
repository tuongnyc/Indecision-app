import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

// parent component!
export default class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    }
    /*
    constructor(props) {
        super(props);

        this.state = {
            options: props.options
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    } */



    // Arrow function in ES6 classes are properties!!!, so it has
    // access to this pointer.  It is not method!
    // old method ES5, it need to be a function ie: handleDeleteOptions() {}
    //handleDeleteOptions - function can pass down to children as props.
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        })

        // alternatively
        // note arrow function with one line, no need to use keyword
        // return, because it is implicit.  Returning an object,
        // must be surrounded by ().  If {} alone, arrow function
        // treat it as a function body!
        //this.setState(() => ({options:[]}));
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((op) => op !== option)}))
    }   

    handleClearSelectOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handlePick = () => {
        console.log(this.state.options);
        // randomly pick and option!
       const length = this.state.options.length;

        if(length > 0) {
            const randomNum = Math.floor(Math.random() * length);
            const option = this.state.options[randomNum];
            console.log(option);
            // use set state
            this.setState( () => ({
                selectedOption: option
            }) );
        } 
    }

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) >= 0){ // already exxist
            return 'This option already exist'
        }

        this.setState((prevState) => {
            // never change the prevState!!
            return {
                options: prevState.options.concat([option])
            }
        })
    }

        // only in class based component!  Lifecycle method.
    // invoke only when component mounted.
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            // get the options back from local storage!
            const options = JSON.parse(json);

            // set the state!
            if(options)
                this.setState(() => ({options: options})) ;

            // localStorage.clear()  will clear all the local
            // storage!
        } catch(error) {
            // if JSON is invalid, don't do anything!
        }

    }

    // lifecycle method will invoke when the component get updated!
    // options array updated!  Only when props or state changes!
    // when figuring when the data changes.!
    // prevProps - previous props
    // prevState
    // arguments are optional!
    // invoke after render function!
    componentDidUpdate(prevProps, prevState) {
        // save the data!
        // if the previous state is not the same, then save the data
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);  // save in the localStorage only when data changes.
        } 
    }

    // when component go away, barely use!
    // ie. individual options that remove away!
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        // options is passed in as parameter!.
        // rendering the child component!
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options options={this.state.options} 
                             handleDeleteOptions={this.handleDeleteOptions}
                             handleDeleteOption={this.handleDeleteOption}
                         />
                        <AddOption 
                            handleAddOption={this.handleAddOption}/>
                    </div>
                </div>

                <OptionModal selectedOption={this.state.selectedOption} 
                    handleClearSelectOption={this.handleClearSelectOption}
                />
                
            </div>
        );
    }
}