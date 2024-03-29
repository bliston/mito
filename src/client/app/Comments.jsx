import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
class Comments extends Component {

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
            <button>{comment.content}</button>
            {comment.children && <Comments children={comment.children}/>}
          </div>
        )}
      </div>
    )

  }

}

Comments.propTypes = {
  children: PropTypes.array.isRequired
}

Comments.defaultProps = {
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

export default Comments