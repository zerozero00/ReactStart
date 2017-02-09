import React from 'react';

class MyComponent extends React.Component {
  render () {
    return (
	<div>
		<div> this is my component </div>
		<Header content='this is Header'/>
		<Body content='This is Body'/>
	</div>
	);
  }
}

class Header extends React.Component {
  render () {
    return (
	<h1>Header: {this.props.content}</h1>
	);
  }
}

class Body extends React.Component {
  render () {
    return (
	<h2>Body {this.props.content}</h2>
	);
  }
}

export default MyComponent;
