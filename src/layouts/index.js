import React, { createContext } from 'react'
import Header from '../components/structure/Header/Header'
import SideBar from '../components/SideNavBar'
import '../components/structure/index.css'
import '../components/structure/darkmode.css'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="main-wrapper">
          <SideBar />
          <div className="main">{this.props.children}</div>
        </div>
      </div>
    )
  }
}

export default Layout
