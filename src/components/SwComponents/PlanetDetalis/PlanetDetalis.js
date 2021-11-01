import ItemDetalis from "../../ItemDetalis";
import {Record} from "../../ItemDetalis/ItemDetalis";
import {WithSwapi} from "../../HOC/WithSwapi/WithSwapi";

const PlanetDetalis = (props) => {
    return (
        <ItemDetalis {...props}>
            <Record field='population' label='Population'/>
            <Record field='rotationPeriod' label='Rotation Period'/>
            <Record field='diameter' label='Diameter'/>
        </ItemDetalis>
    )
};

const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
})

export default WithSwapi(PlanetDetalis, mapMethodsToProps)