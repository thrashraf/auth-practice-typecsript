import React from 'react'
import style from './Spinner.module.css'


export const Spinner = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className={style.loader}>
                <svg viewBox="0 0 80 80">
                    <circle id="test" cx="40" cy="40" r="32"></circle>
                </svg>
            </div>

            <div className={`${style.triangle} ${style.loader}`}>
                <svg viewBox="0 0 86 80">
                    <polygon points="43 8 79 72 7 72"></polygon>
                </svg>
            </div>

            <div className={style.loader}>
                <svg viewBox="0 0 80 80">
                    <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
            </div>
        </div>
    )
}
