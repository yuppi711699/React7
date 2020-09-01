import React from 'react';
import css from './CssModulePage.module.scss';
// import css from './CssModulePage.module.css'
import classnames from 'classnames';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function CssModulePage (){
    return(
        <div className={css.wrapper}>
            <div className={css.list}>
                <div className={css.item}>
                    <Button className={css.btn} isRed label={'button'}/>
                    <Input className={css.input} isWide label1={'input'}/>
                </div>
            </div>
        </div>
    )
}
export default CssModulePage;