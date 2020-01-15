import React, {Component} from 'react';
import './App.css';
import './style.scss';

import { AddContactForm } from './components/AddContactForm';
import { List } from './components/List';

class App extends Component {

render(){
  return (
    <div className="App">
      <h1>Address book</h1>
        <AddContactForm/>
        <List/>
    </div>
  );
}
}

export default App;
