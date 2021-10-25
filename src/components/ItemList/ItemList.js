import React, {Component} from 'react';
import './ItemList.css'
import {swapi} from "../../services/swapi/SwapiService";
import Spinner from "../Spinner";

class ItemList extends Component {
    state = {
        peopleList: null,
        isLoading: true
    }

    componentDidMount() {
        swapi.getAllPeople()
            .then(list => {
                this.setState({
                    peopleList: list
                })
            })
    }

    render() {
        const {peopleList} = this.state
        const {onItemSelected} = this.props
        const content = peopleList ?
            peopleList.map(p =>
                <li
                    key={p.id}
                    className='list-group-item'
                    onClick={onItemSelected.bind(null, p.id)}
                >

                    {p.name}
                </li>)
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