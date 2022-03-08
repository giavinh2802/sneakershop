import React from 'react'

import './Topnav.css'
import Dropdown from '../Dropdown/Dropdown'
import {Link} from 'react-router-dom'
import ThemeMenu from '../Thememenu/ThemeMenu'

import notifications from '../../Assets/JsonData/notification.json'

import user_image from '../../Assets/images/Vinh.png'
import user_menu from '../../Assets/JsonData/user_menus.json'

//Code cứng user
const curr_user = {
  display_name: 'Gia Vinh',
  image: user_image
}

//Trả về thông báo
const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
  </div>
)

//Trả user(code cứng)
const renderUserToggle = (user) => (
  <div className="topnav__right-user">
      <div className="topnav__right-user__image">
          <img src={user.image} alt="" />
      </div>
      <div className="topnav__right-user__name">
          {user.display_name}
      </div>
  </div>
)

//Trả menu của User
const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const TopNav = () => {
  return (
    <div className='topnav'>
        <div className="topnav__search">
            <input type="text" placeholder='Search here...' />
            <i className='bx bx-search'></i>
        </div>
        <div className="topnav__right">
            <div className="topnav__right-item">
                {/* dropdown here */}
                <Dropdown
                    customToggle={() => renderUserToggle(curr_user)}
                    contentData={user_menu}
                    renderItems={(item, index) => renderUserMenu(item, index)}
                />
            </div>
            <div className="topnav__right-item">
                <Dropdown
                    icon='bx bx-bell'
                    badge='12'
                    contentData={notifications}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to='/'>View All</Link>}
                />
                {/* dropdown here */}
            </div>
            <div className="topnav__right-item">
                <ThemeMenu/>
            </div>
        </div>
    </div>
)
}

export default TopNav