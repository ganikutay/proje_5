
import React from 'react';
import './App.css';
import Render1 from './components/Render_1';
import Render2 from './components/Render_2';
import Render3 from './components/Render_3';
import Render4 from './components/Render_4';
import Render5 from './components/Render_5';
import Render6 from './components/Render_6';



export default class App extends React.Component{


 constructor(props) {
      super(props);
      this.state = {
        loggedIn: true,
        userRole: "super_admin"
      }
    }


    render() {
      return (
        <div className="App">
          <Render1 />
          <Render2 />
          <Render3 loggedIn = {false} />

          <Render4 loggedIn = {true} />
          <Render5 />
          <Render6 {...this.state} />
        </div>
      );
    }

  

}
