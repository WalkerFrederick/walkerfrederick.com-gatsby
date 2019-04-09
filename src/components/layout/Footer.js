import React from 'react'
import { Link } from 'gatsby'
import getFromYaml from '../helpers/getFromYaml'

import '../../styles/footer.scss'

/**
* Footer component
*
*/

class Footer extends React.Component {
    constructor(props){
        super(props)

        this.navigation = getFromYaml(`pages`)
        this.social = getFromYaml(`social`)

        this.state = {
            
        }
    }

    navigationLinks() {
        let navigation = this.navigation.items.map((item, i) => <li key={i}><Link className={`Link Link-${item.display} nav-${item.display}`} to={item.link}>{item.title}</Link></li>)
        return navigation
    }
    socialLinks() {
        let social = this.social.items.map((item, i) => <li key={i}><a target="_blank" rel="noopener noreferrer" className={`Link Link-social`} href={item.link}>{item.title}</a></li>)
        return social
    }

    render() {
        return (
            <>
                <footer className={`footer`}>
                    <div className="footer-navigation">
                        <div className="footer-navigation-inner">
                            <h1>Walker Frederick</h1>
                            <ul>
                                {this.navigationLinks()}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-social">
                        <ul>
                            {this.socialLinks()}
                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}

Footer.defaultProps = {
}

export default Footer
