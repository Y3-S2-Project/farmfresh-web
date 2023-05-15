
import React from 'react'

export const CustomButton = ({ type, classes , value }) => {
    switch (type) { 
        case 'product-add':
            return <button className={classes}>{ value}</button>




        default:
            return <div>button</div>
    }  
    

}
