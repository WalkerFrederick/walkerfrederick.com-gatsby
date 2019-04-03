import React from 'react'
import { Link } from 'gatsby'

import getFromYaml from '../helpers/getFromYaml'

import '../../styles/navbar.scss'

/**
* Navbar component
*
* The Navbar component takes an array of your Ghost
* Navbar property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
class Navbar extends React.Component {
    constructor(props){
        super(props)

        this.navigation = getFromYaml(`pages`)
        this.social = getFromYaml(`social`)

        this.state = {
            navbarShown: null,
        }
    }

    async toggleNavbar() {
        await this.setState({ navbarShown: !this.state.navbarShown })
        console.log(this.state.navbarShown)
    }

    navigationLinks() {
        let navigation = this.navigation.items.map((item, i) => <li key={i}><Link className={`Link Link-${item.display} nav-${item.display}`} to={item.link}>{item.title}</Link></li>)
        return navigation
    }
    socialLinks() {
        let social = this.social.items.map((item, i) => <li key={i}><a className={`Link-social`} href={item.link}>{item.title}</a></li>)
        return social
    }

    render() {
        return (
            <>
                <nav>
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
