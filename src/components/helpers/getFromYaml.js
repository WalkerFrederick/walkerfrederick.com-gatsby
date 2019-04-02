import PropTypes from 'prop-types'

const getFromYaml = (data) => {
    try {
        // declare as var here, so it's accessible outside of the try scope
        var [sidebarfile] = require(`../../data/${data}.yaml`)
    } catch (e) {
        // TODO: make clear error handling here
        throw e
    }

    return sidebarfile
}

getFromYaml.propTypes = {
    data: PropTypes.string.isRequired,
}

export default getFromYaml