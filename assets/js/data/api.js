const BASE_URL = "https://api.football-data.org/";
const API_TOKEN = "ffb40bcd948d4fc1b8987b3baa96cb12";
const ID_LIGA = 2014;
const COMPETITIONS = `${BASE_URL}v2/competitions?plan=TIER_ONE`;
const STANDINGS = `${BASE_URL}v2/competitions/2014/standings?standingType=TOTAL`;

function resultStatus(result) {

    if (result.status !== 200) {
        console.log("Error : " + result.status);
        l
        return Promise.reject(new Error(result.statusText));
    } else {
        return Promise.resolve(result);
    }

}

function convertResultToJSON(result) {

    return result.json();

}

function showError(error) {

    console.log(error);

}

function fetchAPI(endpoint) {

    return fetch(endpoint, {
        headers: {
            "X-Auth-Token": API_TOKEN
        }
    })

}

function getCompetitions() {

    return new Promise(function (resolve, reject) {

        if ("caches" in window) {
            caches.match(COMPETITIONS).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        renderCompetitionsResults(data.competitions);
                        resolve(data.competitions);
                    });
                }
            });
        }

        fetchAPI(COMPETITIONS)
            .then(resultStatus)
            .then(convertResultToJSON)
            .then(function (data) {
                renderCompetitionsResults(data.competitions);
                resolve(data.competitions)
            })

            .catch(showError);


    })

}

function getStandings() {

    return new Promise(function (resolve, reject) {

        if ("caches" in window) {
            caches.match(STANDINGS).then(function (response) {
                if (response) {
                    response.json().then(function (data) {
                        renderStandingsResult(data.standings[0].table);
                        resolve(data.standings[0].table);
                        addButtonClicked(data.standings[0].table);
                    });
                }
            });
        }

        fetchAPI(STANDINGS)
            .then(resultStatus)
            .then(convertResultToJSON)
            .then(function (data) {
                renderStandingsResult(data.standings[0].table);
                resolve(data.standings[0].table);
                addButtonClicked(data.standings[0].table);

            })

            .catch(showError);



    })

}