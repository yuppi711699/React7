import React from "react";
import './Wysiwyg.scss';
import PropTypes from 'prop-types'
function Wysiwyg({text}){
    return (
        <div className='wysiwyg' dangerouslySetInnerHTML={{__html: text}} />

    )
}

// Wysiwyg.PropTypes = {
//     text: PropTypes.string
// }
export default Wysiwyg;

