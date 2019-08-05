import React from 'react'
import base from '../components/base.css'
import '../styles/gc.css'

const FixedMenuLayout = () => (
  <header>
    <div className="nav-container">
      <div className="container">
        <div id="logo">
          <a href="https://www.gamingclub.com/" data-gtmid='101:1' data-info='Logo'></a>
        </div>

        <div id="nav">
          <nav>
            <div className="burger-container"><span className="burger" data-gtmid='900:11' data-info='Burger Menu'
                                                    data-ctx='Menu'></span></div>
            <ul>
              <li><a href="https://www.gamingclub.com/" data-gtmid="103:2" data-info="Home" data-ctx="Menu">Home</a>
              </li>
              <li><a href="https://www.gamingclub.com/casino-games/" data-gtmid="103:3" data-info="Casino Games"
                     data-ctx="Menu">Casino Games</a></li>
              <li><a href="https://www.gamingclub.com/casino-promotions/" data-gtmid="103:4" data-info="Promotions"
                     data-ctx="Menu">Promotions</a></li>
              <li><a className="language-nav" data-gtmid="104:5" data-info="Language"
                     data-ctx="Language Pop">Language</a></li>
              <li className="nav-support"><a className="live-help-mobile" href="javascript:void(0);"
                                             onClick="window.open('https://smrouter.com/divert/sitemaxtraffic/GCC/en/','name','width=490,height=600,top=111,left=111,scrollbars=no,resizable=no','replace=true')"><img
                src="https://gcccdn.com/theme/images/support-icon.png" alt="Support" data-gtmid='901:16'
                data-info='Support'/></a></li>
            </ul>
          </nav>
        </div>

        <div id="header-buttons">
          <a className="register_btn buttons" href="javascript:void(0);" data-gtmid='102:8' data-info='Register'
             data-ctx='Menu'>Register</a>
          <a className="desktop_login buttons" href="javascript:void(0);" data-gtmid='102:9' data-info='Login'
             data-ctx='Menu'>Login</a>
        </div>
      </div>

      <a className="live-help" href="javascript:void(0);"
         onClick="window.open('https://smrouter.com/divert/sitemaxtraffic/GCC/en/','name','width=490,height=600,top=111,left=111,scrollbars=no,resizable=no','replace=true')"
         data-gtmid='101:10' data-info='Support' data-ctx='Menu'>Support</a>
    </div>
  </header>
)

export default FixedMenuLayout
