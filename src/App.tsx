import React from 'react';
import UserCardForm from './components/userCardForm';
import Menu from './components/menu';
import { HiMenu, HiArrowLeft } from "react-icons/hi";
import './App.css';

type AppState = {
  currentView: string,
  previousView?: string | null,
  userName?: string;
}

class App extends React.Component<any, AppState>{
  constructor(props: any) {
    super(props);
    this.state = {
      //we are setting currentView to userCardForm for test purposes only. Normally, this would be set to default start page/view
      currentView: "userCardForm",
      previousView: null,
      //I assume userName will normally be initialised at some point in app lifecycle... we are setting it here for test purposes only
      userName: "Max"
    };
  }
  render() {
    return (
      <div className="App">
        {this.Navbar()}
        {this.content()}
      </div>);
  }


  Navbar = () => {
    switch (this.state.currentView) {
      case "userCardForm":
        return (
          <h3 className="App-header">
            <button onClick={this.displayMenu} >
              <HiMenu style={{ color: 'grey', fontSize: '50px' }} />
            </button> User Card Form
          </h3>
        );

      case "menu":
        return (
          <h3 className="App-header">
            <button onClick={this.back} >
              <HiArrowLeft style={{ color: 'grey', fontSize: '50px' }} />
            </button> Menu
          </h3>
        );
    }
  }

  content = () => {
    if (this.state.currentView === "userCardForm") {
      return (<UserCardForm userName={this.state.userName} />);
    }
    else if (this.state.currentView === "menu") {
      return (<Menu />);
    }
  }

  displayMenu = () => {

  }

  back = () => {
  }
}

export default App;
