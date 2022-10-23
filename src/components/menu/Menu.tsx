import React from 'react'
import NewScene from './file/NewScene'
import Category from './Category'
import MenuBar from './MenuBar'
import LoadScene from './file/LoadScene'
import CloseScene from './file/CloseScene'

interface Props {}

const Menu = ({}: Props): JSX.Element => {
  return (
    <>
      <MenuBar>
        <Category title="File">
          <NewScene />
          <LoadScene />
          <CloseScene />
        </Category>
      </MenuBar>
    </>
  )
}

export default Menu
