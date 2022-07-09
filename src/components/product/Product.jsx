import React from 'react'
import './product.css'
<<<<<<< HEAD
=======
import img1 from '../../img/porto1.png'
import img2 from '../../img/porto2.png'
import sun from '../../img/sun.png'


>>>>>>> a58977127ed0e74f10a0b8463ab9102f99cbde9b

const Product = ({ img }) => {
    return (
        <div className='p'>
<<<<<<< HEAD
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href="http://noref.com" target="_blank" rel='noreferrer'>
                <img src={img} alt="" className="p-img" />
=======
            {/* <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div> */}
            <a href="#" target="_blank" rel="noreferrer">
                <img src={img1} alt="" className="p-img" />
                {/* <img src={img2} alt="" className="p-img" />
                // <img src={sun} alt="" className="p-img" /> */}

>>>>>>> a58977127ed0e74f10a0b8463ab9102f99cbde9b
            </a>
        </div>
    )
}

export default Product