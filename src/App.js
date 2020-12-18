import { Component } from 'react';
import './App.css';
import SideBar from './componets/SideBar/SideBar';
import Workspace from './componets/Workspace/Workspace';

class App extends Component {

  

  render() {
    
    return (
      <div className="App">
        <SideBar />
        <Workspace />
      </div>
    );
  }
}

export default App;
