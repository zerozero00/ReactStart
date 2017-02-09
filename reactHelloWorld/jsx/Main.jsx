import React from 'react';
import MyComponent from './MyComponent.jsx';

class App extends React.Component {
  render () {
    return (
	<div>
		<div> Hello React!</div>
		<MyComponent/>
	</div>
	);
  }
}

export default App;
