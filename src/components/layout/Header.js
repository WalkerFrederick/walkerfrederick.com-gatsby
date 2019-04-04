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
    }

    render() {
        return (
            <>
                <header className={`header header-${this.props.size}`}>
                    <div className="header-inner-left" style={{ background: `url(${this.props.cover_image})` }}>
                        <div className="header-linear-gradient"></div>
                    </div>
                    <div className="header-inner-right">

                    </div>
                    <div className="header-inner-content">
                        <h1>{this.props.title}</h1>
                        <Link className="button" to={`/contact`}>Work with me</Link>
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
