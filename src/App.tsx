import React from 'react';
import UserCardForm from './components/userCardForm';
import './App.css';

class App extends React.Component{

  render(){
    return(
    <div className="App">
      <UserCardForm userName="Max"/>
    </div>);
  }
}

export default App;
