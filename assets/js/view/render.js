function renderCompetitionsResults(competitions) {

    const competitionsListElement = document.getElementsByClassName("competitions_list")[0];

    if (competitionsListElement != undefined) {

        competitions.forEach(competition => {

            competitionsListElement.innerHTML += `
            
            <div class="">
                <div class="col s12 m4">
                <div class="card fs_card_effect">
                    <div class="card-content">
                    <span class="card-title">${competition.name}</span>
                    <p> in ${competition.area.name}</p>
                    </div>
                    <div class="card-action">
                    <p> Start Date: ${competition.currentSeason.startDate}</p> 
                    <P> End Date: ${competition.currentSeason.endDate} </P> 
                    <p> Last Updated: ${competition.lastUpdated}
                    </div>
                </div>
                </div>
            </div>`;

        })

    }

}

function renderStandingsResult(standings) {

    const standingsListElement = document.getElementsByClassName("standings_list")[0];

    if (standingsListElement != undefined) {

        standings.forEach(standing => {

            standingsListElement.innerHTML += `
            
                <div class="col s12 m4">
                <div class="card fs_card_effect">
                    <div class="card-content">
                    <span class="card-title">${standing.team.name}</span>
                    <img src="${standing.team.crestUrl}" alt="${standing.team.name} image" height="100px">
                    <a id="add" data-position="${standing.position}" class = "btn-floating fs_btn halfway-fab waves-effect waves-light ">+</a>
                    </div>
                    <div class="card-action">
                    <figcaption> Played Game: ${standing.playedGames}</figcaption> 
                    <figcaption> Win: ${standing.won}</figcaption>
                    <figcaption> Draw: ${standing.draw}</figcaption>
                    <figcaption> Lost: ${standing.lost}</figcaption>
                    </div>
                </div>
                </div>`;

        })

    }

}

function renderClubsFavorite(favorites) {

    const favoriteListElement = document.getElementsByClassName("favorite_list")[0];

    if (favoriteListElement != undefined) {

        favorites.forEach(favorite => {

            favoriteListElement.innerHTML += `
            
    
                <div class="col s12 m4">
                <div class="card fs_card_effect">
                    <div class="card-content">
                    <span class="card-title">${favorite.team.name}</span>
                    <img src="${favorite.team.crestUrl}" height="100px">
                    <a id="remove" data-position="${favorite.position}" class="btn-floating fs_btn fs_btn_red halfway-fab waves-effect waves-light ">-</a>
                    </div>
                    <div class="card-action">
                    <figcaption> Played Game: ${favorite.playedGames}</figcaption> 
                    <figcaption> Win: ${favorite.won}</figcaption>
                    <figcaption> Draw: ${favorite.draw}</figcaption>
                    <figcaption> Lost: ${favorite.lost}</figcaption>
                    </div>
                </div>
                </div>`;

        })

    }

}

function renderEmpty() {

    const favoriteListElement = document.getElementsByClassName("favorite_list")[0];

    if (favoriteListElement != undefined) {

        favoriteListElement.innerHTML += `
        <div class="col s12 m12">
        <h4 align="center">favorite clubs empty</h4>
        </div>
        `

    }


}

function addButtonClicked(data) {

    let addButtons = document.querySelectorAll("#add");
    addButtons.forEach(function (addButton) {

        addButton.addEventListener("click", function () {
            let position = addButton.dataset.position;
            data.forEach(function (dt) {
                if (dt.position == position) {
                    addToFavorite(dt);
                }

            })

        })

    })

}

function removeButtonClicked() {

    removeButtons = document.querySelectorAll("#remove");

    removeButtons.forEach(function (removeButton) {

        removeButton.addEventListener("click", function () {

            let position = parseInt(removeButton.dataset.position);

            console.log(position);

            removeFavorite(position);

        })

    })



}