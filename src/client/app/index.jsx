import React from 'react';
import {render} from 'react-dom';
import Cells from './Cells.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello Mito!</p>
        <Cells />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
