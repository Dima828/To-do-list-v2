import '../Button/Button.css'
import { useState } from 'react'

export default function Button({children, ...props}){

    return(
        <button className='btn' {...props}>{children}</button>
    )
}