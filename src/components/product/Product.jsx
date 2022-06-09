import React from 'react'
import './product.css'
import img1 from '../../img/porto1.png'
import img2 from '../../img/porto2.png'
import sun from '../../img/sun.png'



const Product = ({ img }) => {
    return (
        <div className='p'>
            {/* <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div> */}
            <a href="#" target="_blank" rel="noreferrer">
                <img src={img1} alt="" className="p-img" />
                {/* <img src={img2} alt="" className="p-img" />
                // <img src={sun} alt="" className="p-img" /> */}

            </a>
        </div>
    )
}

export default Product