import React, { Component } from 'react'
import { Card } from '../'

import './CardList.css'

class CardList extends Component {
  renderCard = (item, index) => {
    const { id, image, title, description, param, price } = item
    return (
      <div key={id} className='card_container'>
        <Card
          image={image}
          title={title}
          description={description}
          param={param}
          price={price}
        />
      </div>
    )
  }
  render () {
    const { data } = this.props
    return (
      <div className='card_list'>
        <div className='row'>
          { data.map(this.renderCard) }
        </div>
      </div>
    )
  }
}

export default CardList
