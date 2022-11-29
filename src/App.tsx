import React from 'react';
import UserCardForm from './components/userCardForm';
import './App.css';

class App extends React.Component{

  render(){
    return(
    <div>
      <UserCardForm userName="Max"/>
    </div>);
  }
}

export default App;
