import React from 'react';
import {render} from 'react-dom';
import Grid from './Components/Grid/GridComponent.jsx';

class App extends React.Component {
  render() {
    return (
      <Grid />
    )
  }
}

render(<App/>, document.getElementById('app'));
