import ItemDetalis from "../../ItemDetalis";
import {Record} from "../../ItemDetalis/ItemDetalis";
import {WithSwapi} from "../../HOC/WithSwapi/WithSwapi";

const PersonDetalis = (props) => {
    return (
        <ItemDetalis {...props}>
            <Record field='gender' label='Gender'/>
            <Record field='eyeColor' label='Eye Color'/>
        </ItemDetalis>
    )
};

const mapMethodsToProps = (swapiService) => ({
    getData : swapiService.getPeople,
    getImageUrl : swapiService.getPersonImage
})

export default WithSwapi(PersonDetalis, mapMethodsToProps)
