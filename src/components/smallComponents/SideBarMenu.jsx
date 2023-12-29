import React from 'react';
import { menuOptions } from '../../../constants/consts';

const SideBarMenu = () => {

    return (
        <div className="sidenav_list">
            {
                menuOptions.map((items,i)=>{
                    return (
                        <div className='nav_items' key={i}>
                        <a href={items.linkTo} target={items?.target || "_self"} >
                        {items.icon}
                        {items.name}
                        </a>
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

export default SideBarMenu