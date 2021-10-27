import React, {Component} from 'react';
import './ItemList.css'
import Spinner from "../Spinner";

class ItemList extends Component {
    state = {
        itemList: null,
        isLoading: true
    }



    componentDidMount() {

        const {getData} = this.props

        getData()
            .then(list => {
                this.setState({
                    itemList: list
                })
            })
    }

    render() {
        const {itemList} = this.state
        const {onItemSelected} = this.props
        const content = itemList ?
            itemList.map(p => {
                const label = this.props.renderItem(p);
                return <li
                    key={p.id}
                    className='list-group-item'
                    onClick={onItemSelected.bind(null, p.id)}
                >
                    {label}
                </li>
            })
            :
            <Spinner/>
        return (
            <ul className='item-list list-group'>
                {content}
            </ul>
        );
    }
}

export default ItemList;