import './Header.css'
import PropTypes from 'prop-types'

function Header({text}) {
    const headerStyle = {
        backgroundColor:'rgba(0,0,0,0.6)', 
        color:'#fff'
    }
    return (
        /*# Styles*/
        <header  style={headerStyle}>
            <h1 className="text-center">{text}</h1>
        </header>
    )
}

Header.defaultProps = {
    text :"my data"
}


Header.prototype = {
    text: PropTypes.string,
}

export default Header
