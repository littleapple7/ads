import React, { Component } from 'react'

import './Panel.css'

class Panel extends Component {
  renderHead () {
    return (
      <div className='panel_head'>
        <div className='panel_caption'>
          {this.renderIcon()}
          {this.renderTitle()}
          {this.renderDescription()}
        </div>
        {this.renderAddition()}
      </div>
    )
  }
  renderBody () {
    const { children } = this.props
    if (children) {
      return <div className='panel_body'>{ children }</div>
    }
  }
  renderAddition () {
    const { addition } = this.props
    if (addition) {
      return <div className='panel_addition'>{ addition }</div>
    }
  }
  renderTitle () {
    const { title } = this.props
    if (title) {
      return <div className='caption_title'>{ title }</div>
    }
  }
  renderDescription () {
    const { description } = this.props
    if (description) {
      return <div className='caption_description'>{ description }</div>
    }
  }
  renderIcon () {
    const { icon } = this.props
    if (icon) {
      return <i className='material-icons'>{ icon }</i>
    }
  }
  render () {
    return (
      <div className='panel'>
        {this.renderHead()}
        {this.renderBody()}
      </div>
    )
  }
}

export default Panel
