import React, {Component, Fragment} from 'react';
import EnventDashboard from '../../features/event/EventDashboard/EnventDashboard'
import Navbar from '../../features/nav/NavBar/Navbar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  
  render(){
    return (
      <Fragment>
        <Navbar />
        <Container className="main">
          <EnventDashboard />
        </Container>
      </Fragment>

    );
  }
  
}

export default App;
