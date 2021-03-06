import React, {Component} from 'react';

class PlanetView extends Component {
    render() {
        const {name, population, rotationPeriod, diameter, id} = this.props
        return (
            <>
                <img className="planet-image"
                     onError={(e)=>{
                         e.target.src = 'https://starwars-visualguide.com/assets/img/planets/5.jpg'
                     }}
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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