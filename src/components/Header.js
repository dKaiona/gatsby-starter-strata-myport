import React from 'react'

import Footer from './Footer'
import me from '../assets/images/me.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={me} alt="" /></a>
                    <h1><strong>Daniel</strong>, I am<br />
                    <strong>A</strong> Team Player<br/>
                     <strong>A</strong> Web Devloper<br />
                      <strong>A</strong> Novice Fisherman<br/>
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
