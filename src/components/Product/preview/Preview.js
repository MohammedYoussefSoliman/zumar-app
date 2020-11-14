import React from 'react'
import scss from '../product.module.scss';
import iphoneImg from '../../../Assets/images/iphone_1.png';
import iphoneThumb1 from '../../../Assets/images/iphone_thumb_1.png';
import iphoneThumb2 from '../../../Assets/images/iphone_thumb_2.png';
import iphoneThumb3 from '../../../Assets/images/iphone_thumb_3.png';
const Preview = ()=> {
    return (
        <div className={scss['product__prev']}>
            <div className={scss['product__prev--view']}>
                <img src={iphoneImg} alt="iphone 11"/>
            </div>
            <div className={scss['product__prev--thumb']}>
                <ul className={scss['thumb__list']}>
                    <li className={scss['thumb__list--item']}>
                        <img src={iphoneThumb1} alt="thumb 1"/>
                    </li>
                    <li className={scss['thumb__list--item']}>
                        <img src={iphoneThumb2} alt="thumb 2"/>
                    </li>
                    <li className={scss['thumb__list--item']}>
                        <img src={iphoneThumb3} alt="thumb 3"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Preview
