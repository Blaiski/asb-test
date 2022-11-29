import React from 'react';
import UserCardForm from './components/userCardForm';
import Menu from './components/menu';
import { HiMenu, HiArrowLeft } from "react-icons/hi";
import './App.css';

type AppState = {
  currentView: { name: string; title: string },
  previousView?: { name: string; title: string } | null,
  userName?: string;
  cardFormState?: any
}

class App extends React.Component<any, AppState>{
  constructor(props: any) {
    super(props);
    this.state = {
      //we are setting currentView to userCardForm for test purposes only. Normally, this would be set to default start page/view
      currentView: { name: "userCardForm", title: "User Card Form" },
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

  /**
   * This is just a simple implementation. For example, views names and titles should be stored as constants in some
   * config class. Also, I feel we can also get rid of the switch/if with a sophisticated single return.
   */
  Navbar = () => {
    switch (this.state.currentView.name) {
      case "userCardForm":
        return (
          <h3 className="App-header">
            <button onClick={this.displayMenu} >
              <HiMenu style={{ color: 'grey', fontSize: '50px' }} />
            </button> {this.state.currentView.title}
          </h3>
        );

      case "menu":
        return (
          <h3 className="App-header">
            <button onClick={this.back}>
              <HiArrowLeft style={{ color: 'grey', fontSize: '50px' }} />
            </button> {this.state.currentView.title}
          </h3>
        );
    }
  }

  content = () => {
    if (this.state.currentView.name === "userCardForm") {
      return (<UserCardForm userName={this.state.userName} cacheState={this.cacheState} cachedState={this.state.cardFormState}/>);
    }
    else if (this.state.currentView.name === "menu") {
      return (<Menu />);
    }
  }

  displayMenu = () => {
    this.setState({
      previousView: {
        name: this.state.currentView.name,
        title: this.state.currentView.title
      },
      currentView: {
        name: "menu",
        title: "Menu"
      }
    });
  }

  back = () => {
    this.state.previousView ?
      this.setState({
        currentView: {
          name: this.state.previousView.name,
          title: this.state.previousView.title
        }
      })
      :
      this.setState({
        currentView: {
          name: "userCardForm",
          title: "User Card Form"
        }
      })
  }

  cacheState = async (stateToCache: any)=>{
    await this.setState({
      cardFormState: stateToCache
    });
    console.log (`I have received userCardForm state`, this.state.cardFormState);
}
}

export default App;
