import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, Pagination } from '../components/common'
import { Header } from '../components/layout'
import { FeaturedCard, PostCard } from '../components/cards'
import { MetaData } from '../components/common/meta'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const settings = data.allGhostSettings.edges

    return (
        <>
            <MetaData location={location} />
            <Layout>
                <Header size={`lg`} cover_image={settings[0].node.cover_image} title={settings[0].node.description}/>
                <div className="container">
                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <FeaturedCard key={node.id} post={node} />
                        ))}
                    </section>
                    <section className="post-feed-single">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                </div>
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    allGhostSettings {
        edges {
            node {
                ...GhostSettingsFields
            }
        }
    }
    file(relativePath: {eq: "ghost-icon.png"}) {
        childImageSharp {
            fixed(width: 30, height: 30) {
                ...GatsbyImageSharpFixed
            }
        }
    }
  }
`
