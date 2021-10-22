import React, {Component} from 'react';
import './ItemList.css'

class ItemList extends Component {
    render() {
        return (
            <ul className='item-list list-group'>
                <li className='list-group-item'>Alex Pashkevich</li>
                <li className='list-group-item'>Alex Pashkevich</li>
                <li className='list-group-item'>Alex Pashkevich</li>
            </ul>
        );
    }
}

export default ItemList;