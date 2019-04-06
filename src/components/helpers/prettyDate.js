import PropTypes from 'prop-types'

const prettyDate = (date) => {

    let prettyDateConversion = date.substring(0,10)

    

    return prettyDateConversion
}

prettyDate.propTypes = {
    date: PropTypes.string.isRequired,
}

export default prettyDate