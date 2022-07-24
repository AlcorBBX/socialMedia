import React, { FC, useState } from 'react'

const Header:FC = () => {
    const [isSearchActive, setIsSearchActive] = useState(false)
  return (
    <header>
        <div>
            {/* <img src='' alt=''/> */}
        </div>
        <div>
            {/* {!isSearchActive && <Search/>} */}
            <input type='text'
                placeholder='Search'
                onClick={() => setIsSearchActive(true)}/>
        </div>
    </header>
  )
}

export default Header