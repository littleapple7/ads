import React, { Component } from 'react'
import {
  Drawer,
  Content,
  CardList,
  Panel,
  Button
} from '../Components'

const DATA = [
  {
    id: 1,
    image: 'http://12millionov.com/wp-content/uploads/2015/08/014.jpg',
    title: '3-х комнатная квартира в аренду',
    description: 'Новый Арбат, 34, Москва',
    param: 124,
    price: 340000
  },
  {
    id: 2,
    image: 'https://z73.d.sdska.ru/2-z73-e3b5005a-eb96-4989-9ecc-203ca115798b.jpg',
    title: '2-х комнатная квартира в аренду',
    description: 'Новый Арбат, 36, Москва',
    param: 244,
    price: 400000
  },
  {
    id: 3,
    image: 'http://www.ifitnes.ru/wp-content/uploads/2017/04/inter2.jpg',
    title: '1 комнатная квартира в аренду',
    description: 'Новый Арбат, 86, Москва',
    param: 136,
    price: 320000
  }
]

class RootContainer extends Component {
  render () {
    return (
      <div className='page_container'>
        <Drawer />
        <Content>
          <Panel
            title='Заголовок'
            description='Описание'
            icon='home'
            addition={<Button title='На карте' />}
          >
            <CardList
              data={DATA}
            />
          </Panel>
        </Content>
      </div>
    )
  }
}

export default RootContainer
