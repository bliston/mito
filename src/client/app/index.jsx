import React from 'react';
import {render} from 'react-dom';
import Comments from './Comments.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello Mito!</p>
        <Comments />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
