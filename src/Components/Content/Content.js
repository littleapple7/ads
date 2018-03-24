import React, { Component } from 'react'

import './Content.css'

class Content extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='right'>
        <div className='content_container'>
          { children }
        </div>
      </div>
    )
  }
}

export default Content
