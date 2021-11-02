import React from "react";
import WithData from "../HOC/WithData";
import ItemList from "../ItemList";
import Compose from "../HOC/Compose";
import {WithSwapi} from "../HOC/WithSwapi/WithSwapi";
import WithChildFunction from "../HOC/WithChildFunction";

const mapPersonMethodsToProps = (sw) => ({
    getData: sw.getAllPeople
})
const mapPlanetMethodsToProps = (sw) => ({
    getData: sw.getAllPlanets
})
const mapStarShipMethodsToProps = (sw) => ({
    getData: sw.getAllStarship
})
const showName = ({name}) => <span>{name}</span>
const showNameAndModel = ({name, model}) => <span>{name} ({model})</span>

const PersonList = Compose(
    WithSwapi(mapPersonMethodsToProps),
    WithData,
    WithChildFunction(showName))(ItemList);
const PlanetList = Compose(WithSwapi(mapPlanetMethodsToProps),
    WithData,
    WithChildFunction(showName))(ItemList);
const StarShipList = Compose(WithSwapi(mapStarShipMethodsToProps),
    WithData,
    WithChildFunction(showNameAndModel))(ItemList);

export {
    PersonList,
    PlanetList,
    StarShipList
}