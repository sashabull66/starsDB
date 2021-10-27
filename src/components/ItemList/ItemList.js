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

const withData = () => {
    return class extends Component {

        state = {
            data: null,
            loading: true
        }

/*        componentDidMount() {
            const {getData} = this.props
            getData()
                .then(data => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
        }*/

        render() {
            console.log(this.state)
            console.log(this.props)
            return (
                <p>hi</p>
            )
        }
    }
}

export default withData(ItemList)