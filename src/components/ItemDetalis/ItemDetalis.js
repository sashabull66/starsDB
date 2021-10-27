import React, {Component} from 'react';
import './ItemDetalis.css'
import Spinner from "../Spinner";


export const Record = (props) => {
    const {item, field, label} = props
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

/*export const Record = (props) => {
    const { field, label} = props
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{field}</span>
        </li>
    )
}*/

class ItemDetalis extends Component {

    state = {
        item: null,
        image: null,
        isLoading: true
    }

    updateItem = () => {
        const {itemId, getData, getImageUrl} = this.props
        if (!itemId) return
        getData(this.props.itemId)
            .then(p => {
                this.setState({
                    item: p,
                    image: getImageUrl(p),
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.updateItem(this.props.itemId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({
                person: null,
                isLoading: true
            })
            this.updateItem()
        }
    }

    render() {
        const {item, isLoading, image} = this.state
        const content = isLoading ? <Spinner/> : <PersonView {...item} imageUrl={image} children={this.props.children}/>
        return (
            <div className="person-details card">
                {content}
            </div>
        );
    }
}

export default ItemDetalis;


class PersonView extends Component {
    render() {
        const {name, gender, birthYear, eyeColor, id, imageUrl} = this.props
        return (
            <>
                <img className="person-image"
                     src={imageUrl}
                     alt="character"/>

                <div className="card-body">
                    <h4>{name || 'n/a'}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, child=>React.cloneElement(child, {item : {...this.props}}))
                        }
                    </ul>
                </div>
            </>
        );
    }
}