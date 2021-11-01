import ItemDetalis from "../../ItemDetalis";
import {Record} from "../../ItemDetalis/ItemDetalis";
import {WithSwapi} from "../../HOC/WithSwapi/WithSwapi";

const StarShipDetalis = (props) => {
    return (
        <ItemDetalis {...props}>
            <Record field='model' label='Model'/>
            <Record field='length' label='Length'/>
            <Record field='costInCredit' label='Cost'/>
        </ItemDetalis>
    )
};
const mapMethodsToProps = (swapiService) => ({
    getData: swapiService.getStarship ,
    getImageUrl: swapiService.getStarshipImage
})

export default WithSwapi(StarShipDetalis, mapMethodsToProps)