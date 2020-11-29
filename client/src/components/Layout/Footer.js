import React from 'react'

const Footer = () => {

   const d = new Date()
   const full = d.getFullYear()

    return (
        <div>         
            <p className="footer">
            <i class="far fa-registered"></i> {full}          
            </p>
        </div>
    )
}

export default Footer