import React, {useState} from 'react';
import BreadItem from './breadItem';
import scss from './breadcrumb.module.scss';


const Breadcrumb = () => {
    const [breads, setBreads] = useState(['home', 'all industries', 'consumer electronics', 'mobile phone & accessories', 'mobile phones'])
    return (
        <div className={scss['breadcrumb']}>
            <ul className={scss['breadcrumb__list']}>
                {breads.map((item, index) => (
                    <BreadItem key={index} bread={item}/>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrumb