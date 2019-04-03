import React from 'react'
import { Link } from 'gatsby'

import '../../styles/Header.scss'

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
                    
                    </div>
                    <div className="header-inner-right">
                    
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
