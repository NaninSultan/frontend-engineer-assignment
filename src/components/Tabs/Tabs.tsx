import React, { FunctionComponent, useState } from 'react'
import './Tabs.css';


const Tabs: FunctionComponent = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='tabs-container'>
            <div onClick={() => setToggle(!toggle)} className={`tab-left tab ${toggle ? 'active' : ''}`}>
                Movies
            </div>
            <div onClick={() => setToggle(!toggle)} className={`tab-right tab ${!toggle ? 'active' : ''}`}>
                Shows
            </div>
        </div>
    )
}

export default Tabs;