// install -> import -> use
// install either use npm or yarn!
// yarn add validator
// yarn add react react-dom

// import react and react-dom

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import IndecisionApp from './components/IndecisionApp';

// import normalize.css.  This will make the css work across
// all different browser!!
import 'normalize.css/normalize.css';

// import all the styles
import './styles/styles.scss';

IndecisionApp.defaultProps = {
    options: []
};

// setting the default value for the props.  Must be after the 
// component!
Header.defaultProps = {
    title: 'Indecision'
};


// now invoke the header <Header /> !!  Case sensitive!
// Allow React to figure out whether it is a component or HTML!
/*const jsx = (
    <div>
        <Header></Header>  
        <Action />   
        <Options />
        <AddOption /> 
    </div>
); */

//ReactDOM.render(jsx, document.getElementById('app'));

// stateless component are just function!!  Similar to class based
// component, it needs to return JSX!, doesn't get access to this
// the function accept the props argument!  Stateless are much faster!
/*const User = (props) => {
    return (
        <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        </div>
    );
}*/


const Layout = (props) => {
    return (
        <div>
        <p>header</p>
        {props.children}
        <p>footer</p>
        </div>
    );
}

const template = (
    <div>
    <h1>Page title</h1>
    <p>This is my page</p>
    </div>
)

// inline!
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
//ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']}/>, document.getElementById('app'));

//ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));
// second method of setting layout using inline method.  
// The props automatically set for us.  Access it as props.children
// We can pass JSX into component!
/*ReactDOM.render((
    <Layout>
        <div>
            <h1>Page title</h1>
            <p>This is my page</p>
        </div>
    </Layout>)
, document.getElementById('app')); */

/*
class OldSyntax {
    constructor() {
        this.name = 'Tuong';
    }

    getGreeting() {
        return `Hi. My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();

console.log(oldSyntax);

//------------

class NewSyntax {
    name = 'Jen';   // note, not const, let or var, 
                    // does not need a constructor!
    getGreeting = () => {
        // no, this pointer.  
        return `Hi. My name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting); */