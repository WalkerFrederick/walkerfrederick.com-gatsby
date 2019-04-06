import React from 'react'
import { Link } from 'gatsby'
import prettyDate from '../helpers/prettyDate'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'


import './cards.scss'

/**
* FeaturedCard component
*
*/

class FeaturedCard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <Link to={`/${this.props.post.slug}`} className="featured-card">
                    <div className="featured-card-image">
                    
                    </div>
                    <div className="featured-card-content">
                        <h1>{this.props.post.slug}</h1>
                        <span>{`Published ${prettyDate(this.props.post.published_at)}`}</span>
                        {this.props.post.featured && <span>Featured</span>}
                        <p>{this.props.post.excerpt}</p>
                        <div>{readingTimeHelper(this.props.post)}</div>
                    </div>
                </Link>
            </>
        )
    }
}

FeaturedCard.defaultProps = {
    title: `no title found`,
    description: `no description found`,
}

export default FeaturedCard
