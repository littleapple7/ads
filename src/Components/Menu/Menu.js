import React, { Component } from 'react'

import './Menu.css'

class Menu extends Component {
  render () {
    return (
      <ul className='menu'>
        <li className='active'><a>
          <i className='material-icons'>home</i>
          <span>Недвижимость</span>
        </a></li>
        <li><a>
          <i className='material-icons'>directions_car</i>
          <span>Транспорт</span>
        </a></li>
        <li><a>
          <i className='material-icons'>devices</i>
          <span>Бытовая электроника и техника</span>
        </a></li>
        <li><a>
          <i className='material-icons'>business</i>
          <span>Для бизнеса</span>
        </a></li>
      </ul>
    )
  }
}

export default Menu
