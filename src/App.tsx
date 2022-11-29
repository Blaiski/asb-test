import React from 'react';
import UserCardForm from './components/userCardForm';
import Menu from './components/menu';
import { HiMenu} from "react-icons/hi";
import './App.css';

class App extends React.Component{

  render(){
    return(
    <div className="App">
      <h3 className="App-header">
          <button>
            <HiMenu style={{ color: 'grey', fontSize: '50px' }} />
          </button> User Card Form
        </h3>
      <UserCardForm userName="Max"/>
      <Menu/>
    </div>);
  }
}

export default App;
