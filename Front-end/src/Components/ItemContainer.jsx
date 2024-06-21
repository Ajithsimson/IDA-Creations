import React from 'react'
import Item from './Item'
import {Services, RESOURCES, COMPANY, QUICKLINKS} from './Menus'

const ItemContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16'>
      <Item Links={Services} title="Services" />
      <Item Links={RESOURCES} title="Resources"/>
      <Item Links={COMPANY} title="Company"/>
      <Item Links={QUICKLINKS} title="Quick links"/>

    </div>
  )
}

export default ItemContainer
