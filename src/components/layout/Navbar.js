import React from 'react'
import { Link } from 'gatsby'

import getFromYaml from '../helpers/getFromYaml'

import '../../styles/navbar.scss'

/**
* Navbar component
*
*/
class Navbar extends React.Component {
    constructor(props){
        super(props)

        this.navigation = getFromYaml(`pages`)
        this.social = getFromYaml(`social`)

        this.state = {
            navbarShown: null,
            navbarStyles: {},
        }
    }

    async toggleNavbar() {
        await this.setState({ navbarShown: !this.state.navbarShown })
    }

    navigationLinks() {
        let navigation = this.navigation.items.map((item, i) => <li key={i}><Link className={`Link Link-${item.display} nav-${item.display}`} to={item.link}>{item.title}</Link></li>)
        return navigation
    }
    socialLinks() {
        let social = this.social.items.map((item, i) => <li key={i}><a target="_blank" rel="noopener noreferrer" className={`Link-social`} href={item.link}>{item.title}</a></li>)
        return social
    }

    hasScrolled() {
        if (window.pageYOffset > 10) {
            this.setState({ navbarStyles: { boxShadow: `2px 4px 4px rgba(0, 0, 0, 0.15)` } })
        }
        else {
            this.setState({ navbarStyles: { boxShadow: `none` } })
        }
    }

    componentDidMount() {
        window.addEventListener(`scroll`, this.hasScrolled.bind(this))
        this.navblock.addEventListener(`click`, this.toggleNavbar.bind(this))
    }

    render() {
        return (
            <>
                <nav ref={(com) => { this.navbar = com }} style={this.state.navbarStyles}>
                    <div ref={(com) => { this.navblock = com }} className={`nav-block nav-block-${this.state.navbarShown}`}> </div>
                    <h1>walker frederick</h1>
                    <ul>
                        <div onClick={this.toggleNavbar.bind(this)} className={`nav-btn`}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <ul className={`nav-links nav-links-${this.state.navbarShown}`}>
                            {this.navigationLinks()}
                        </ul>
                    </ul>
                </nav>
                <nav className={`social-nav`}>
                    <ul>
                        {this.socialLinks()}
                    </ul>
                </nav>
            </>
        )
    }
}

Navbar.defaultProps = {
    navClass: `navbar-item`,
}

export default Navbar
