import React, { Component, PropTypes } from 'react'
import { Button } from 'react-bootstrap';
import _ from 'lodash'
class Cells extends Component {

  constructor(props) {
      super(props);
  }

  componentWillMount() {
    this.id = _.uniqueId()
  }

  render() {

    const { children } = this.props

    return (
      <div className="row column">
        {children.map(comment =>
          <div key={comment.id} className="row column">
            <Button>{comment.content}</Button>
            {comment.children && <Cells children={comment.children}/>}
          </div>
        )}
      </div>
    )

  }

}

Cells.propTypes = {
  children: PropTypes.array.isRequired
}

Cells.defaultProps = {
  children: [{
    id: 1,
    content: 'level 0',
    children: [
    {
      id: 2,
      content: 'level 1a',
    },
    {
      id: 3,
      content: 'level 1b',
    }
    ]
}]
}

export default Cells