import React, { Component } from 'react'

import './Card.css'

class Card extends Component {
  renderHead () {
    const { image } = this.props
    return (
      <div className='card_head' style={{ backgroundImage: `url(${image})` }}>
        { this.renderButton() }
      </div>
    )
  }
  renderBody () {
    return (
      <div className='card_body'>
        { this.renderTitle() }
        { this.renderDescription() }
        { this.renderAdditional() }
      </div>
    )
  }
  renderTitle () {
    const { title } = this.props
    return <div className='card_title'>{title}</div>
  }
  renderDescription () {
    const { description } = this.props
    return <div className='card_description'>{description}</div>
  }
  renderAdditional () {
    return (
      <div className='card_additional'>
        { this.renderParam() }
        { this.renderPrice() }
      </div>
    )
  }
  renderParam () {
    const { param } = this.props
    return <div className='card_param'>{ param } м²</div>
  }
  renderPrice () {
    const { price } = this.props
    return <div className='card_price'>{ price } ₽</div>
  }
  renderButton () {
    return <div className='btn-icon material-icons'>arrow_forward</div>
  }
  render () {
    return (
      <div className='card'>
        { this.renderHead() }
        { this.renderBody() }
      </div>
    )
  }
}

export default Card
