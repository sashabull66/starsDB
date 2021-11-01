import React from 'react';
import './ItemList.css'

const ItemList = (props) => {
    const {data, onItemSelected} = props

    const content = data.map(p => {
       const label = props.children(p);
        return <li
            key={p.id}
            className='list-group-item'
            onClick={()=>{onItemSelected(p.id)}}
        >
            {label}
        </li>
    })

    return (
        <ul className='item-list list-group'>
            {content}
        </ul>
    );
}



export default ItemList