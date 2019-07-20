'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

require('normalize.css/normalize.css');

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import normalize.css.  This will make the css work across
// all different browser!!
// install -> import -> use
// install either use npm or yarn!
// yarn add validator
// yarn add react react-dom

// import react and react-dom

_IndecisionApp2.default.defaultProps = {
    options: []
};

// setting the default value for the props.  Must be after the 
// component!


// import all the styles
_Header2.default.defaultProps = {
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

var Layout = function Layout(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            null,
            'header'
        ),
        props.children,
        _react2.default.createElement(
            'p',
            null,
            'footer'
        )
    );
};

var template = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        'Page title'
    ),
    _react2.default.createElement(
        'p',
        null,
        'This is my page'
    )
);

// inline!
_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById('app'));
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
