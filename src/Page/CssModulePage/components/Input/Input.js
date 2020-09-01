import React, {useState} from 'react';
import css from './Input.module.scss';
import classNames from 'classnames';

function Input({className, isWide, label}){
    const [onFocus, setOnFocus] = useState (false);
    const [onBlur, setOnBlur] = useState (false);
    
    const inputClass = classNames (
        css.input,
        className,
        {
            [css.wide]: isWide,
            'input-focus': onFocus,
            'input-blur': onBlur && !onFocus
        })
        return(
            <div>
            <div className='label1'>{label}</div>
            <input type="text" name={label}//"name"
                classNames = {inputClass}
                onMouseDown = {()=>{setOnFocus(true)}}
                onMouseUp = {()=>{setOnFocus(true)}}
                onMouseEnter = {()=>{setOnBlur(true)}}
                onMouseLeave = {()=>{setOnBlur(false)}}
            />
             </div>
            // </input>
)}
export default Input;