import React from "react";
import WithData from "../HOC/WithData";
import ItemList from "../ItemList";
import {WithSwapi} from "../HOC/WithSwapi/WithSwapi";

const withChildFN = (Wrapper, FN) => {
    return (props) => {
        return <Wrapper {...props}>
            {FN}
        </Wrapper>
    }
}
const mapPersonMethodsToProps = (sw) => ({
    getData: sw.getAllPeople
})
const mapPlanetMethodsToProps = (sw) => ({
    getData: sw.getAllPlanets
})
const mapStarShipMethodsToProps = (sw) => ({
    getData: sw.getAllStarship
})
const PersonList = WithSwapi(WithData(withChildFN(ItemList, ({name}) => <span>{name}</span>)), mapPersonMethodsToProps);
const PlanetList = WithSwapi(WithData(withChildFN(ItemList, ({name}) => <span>{name}</span>)), mapPlanetMethodsToProps);
const StarShipList = WithSwapi(WithData(withChildFN(ItemList, ({name, model}) =>
    <span>{name} ({model})</span>)), mapStarShipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarShipList
}