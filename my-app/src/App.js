import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'CodesByEL',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contract' },
      ],
      home: {
        title: 'A Human. Being',
        subtitle: 'Girl Who Codes',
        text: 'Checkout my project below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Let\'s Talk',
      },
    }
  }
  render() {
    return (
      <div>Hello from react</div>
    );
  }
}
export default App;
