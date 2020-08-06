const dbPromised = idb.open("FantasticSport", 1, (upgradeDB) => {
    const clubsObjectStore = upgradeDB.createObjectStore("clubs", {
        keyPath: "position",
    });
    clubsObjectStore.createIndex("clubs_name", "team.name", {
        unique: false
    });
});

function addToFavorite(data) {

    dbPromised
        .then((db) => {
            let tx = db.transaction("clubs", "readwrite");
            let store = tx.objectStore("clubs");
            store.put(data);

            return tx.complete;
        })
        .then(function () {
            M.toast({
                html: `${data.team.name} added to favorite`,
            });
        });

}

function getAllFavorites() {
    return new Promise(function (resolve, reject) {
        dbPromised
            .then((db) => {
                let tx = db.transaction("clubs", "readonly");
                let store = tx.objectStore("clubs");

                return store.getAll();
            })
            .then((data) => {
                resolve(data);

                if (data.length != 0) {
                    renderClubsFavorite(data);
                    removeButtonClicked();
                } else {
                    renderEmpty();
                }
            });
    });
}

function removeFavorite(position) {
    dbPromised
        .then((db) => {
            let tx = db.transaction("clubs", "readwrite");
            let store = tx.objectStore("clubs");

            store.delete(position);

            return tx.complete;
        })
        .then(function () {
            M.toast({
                html: "Deleted from favorite",
            });
        });
    location.reload();
}