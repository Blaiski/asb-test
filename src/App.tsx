import React from 'react';
import UserCardForm from './components/userCardForm';
import Menu from './components/menu';
import './App.css';

class App extends React.Component{

  render(){
    return(
    <div className="App">
      <UserCardForm userName="Max"/>
      <Menu/>
    </div>);
  }
}

export default App;
