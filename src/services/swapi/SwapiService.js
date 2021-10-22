class SwapiService {
    _startUrl = 'https://swapi.dev/api/';
    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };
    _transformPlanet(planet) {
        const id = this._extractId(planet)
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };
    _transformStarShip(ship) {
        const id = this._extractId(ship)
        return {
            id,
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredit: ship.costInCredit,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargoCapacity
        }
    };
    _transformPerson(person) {
        const id = this._extractId(person)
        return {
            id,
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    };
    async _fetchToSwapi(url) {
        const f = await fetch(this._startUrl + url.toString())
        if (!f.ok) {
            throw new Error(`Not fetch url ${url}. Error status - ${f.status}`)
        }
        return await f.json()
    };

    async getAllStarship() {
        const starships = await this._fetchToSwapi('starships')
        return starships.results.map(people=>this._transformStarShip(people))
    };
    async getStarship(id) {
        const starship = await this._fetchToSwapi(`starships/${id}`)
        return this._transformStarShip(starship)
    };
    async getAllPeople() {
        const peoples = await this._fetchToSwapi('people')
        return peoples.results.map(people=>this._transformPerson(people))
    };
    async getPeople(id) {
        const people = await this._fetchToSwapi(`people/${id}`)
        return this._transformPerson(people)
    };
    async getAllPlanets() {
        const planets = await this._fetchToSwapi('planets')
        return planets.results.map(planet => this._transformPlanet(planet))
    };
    async getPlanet(id) {
        const planet = await this._fetchToSwapi(`planets/${id}`)
        return this._transformPlanet(planet)
    };
}

export const swapi = new SwapiService();
