import React, { Component } from 'react'

import './Drawer.css'

class Drawer extends Component {
  render () {
    return (
      <div className='left'>
        <div className='logo'>
          <div className='logo_title'>Объявлятор</div>
          <div className='logo_description'>Объявления в твоем городе</div>
        </div>
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
      </div>
    )
  }
}

export default Drawer
