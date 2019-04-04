import React from 'react'
import { Link } from 'gatsby'

import '../../styles/header.scss'

/**
* Header component
*
*/

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            
        }

        console.log(this.props.coverImage)
    }

    render() {
        return (
            <>
                <header className={`header header-${this.props.size}`}>
                    <div className="header-inner-left">
                        <div className="header-linear-gradient"></div>
                    </div>
                    <div className="header-inner-right">

                    </div>
                    <div className="header-inner-content">
                        <h1>build a better web.</h1>
                        <p>Ever wanted to get data from a website but found that it lacked a public API? Well Web Scraping has got you covered, literally any data that is rendered on a web page can be scraped for your own personal use.</p>
                    </div>
                </header>
            </>
        )
    }
}

Header.defaultProps = {
    size: `sm`,
}

export default Header
