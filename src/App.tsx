import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import './App.css';
import Footer from './footer';
import Header from './header';
import MainContainer from './main';

class App extends PureComponent {
  componentDidCatch(error: any, errorInfo: any) {
    if (error) {
      throw new Error(error);
    }
    throw new Error(errorInfo);
  }

  render() {
    return (
      <Grommet plain>
          <div className="App">
            <Header />
            <MainContainer />
            <Footer />
          </div>
      </Grommet>
    );
  }
}

export default App;

