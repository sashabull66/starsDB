import React, {Component} from 'react';

class PlanetView extends Component {
    state = {
        mYId: null
    }
    componentDidMount() { // проверка на валидность картинки
        fetch(`https://starwars-visualguide.com/assets/img/planets/${this.props.id}.jpg`)
            .then(res=>{
            if (res.status < 400) {
                return null
            }
            else {
                this.setState({
                    mYId: 5
                })
            }
        })
            .catch(error=>console.log(error))
    }

    componentWillUnmount() {
        this.setState({
            mYId: null
        })
    }

    render() {
        const {name, population, rotationPeriod, diameter, id} = this.props
        return (
            <>
                <img className="planet-image"
                     /*onError={()=>{
                         this.setState({
                             mYId: 5
                         })
                     }}*/
                     src={`https://starwars-visualguide.com/assets/img/planets/${this.state.mYId || id}.jpg`}
                     alt="planet"/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default PlanetView;