class Library {
    constructor(name, creator) {
        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }
}

class Playlist {
    constructor(name) {
        this.name = name;
        this.tracks = [];
    }

    get overallRating() {
        let sum = 0;
        this.tracks.forEach((track) => {
            sum += track._rating;
        });
        return sum / this.tracks.length;
    }

    get totalDuration() {
        let sum = 0;
        this.tracks.forEach((track) => {
            sum += track.length;
        });
        return sum;
    }

    addToLibrary(library) {
        library.playlists.push(this);
    }
}

class Track {
    constructor(title, artist, rating, length) {
        this.title = title;
        this.artist = artist;
        this.rating = rating;
        this.length = length;
    }

    addToPlaylist(playlist) {
        playlist.tracks.push(this);
    }

    get rating() {
        return this._rating;
    }

    set rating(ratingNum) {
        if (ratingNum >= 1 && ratingNum <= 5) {
            this._rating = ratingNum;
        } else {
            console.log("Invalid rating. Must be between 1 and 5. Automatically set to 1");
            this._rating = 1;
        }
    }
}

const track01 = new Track("Clear Blue Water", "Oceanlab", 15, 300);
const track02 = new Track("Home", "Above & Beyond", 5, 320);
const track03 = new Track("Maze Runners", "James Dymond", 5, 320);
const track04 = new Track("Us", "Simon Patterson", 5, 320);
const playlist01 = new Playlist("classics");
const playlist02 = new Playlist("uplifting");
const library = new Library("trance", "tommy");

track01.addToPlaylist(playlist01);
track02.addToPlaylist(playlist01);

track03.addToPlaylist(playlist02);
track04.addToPlaylist(playlist02);

console.log(playlist01);
console.log(playlist01.overallRating);
console.log(playlist02.totalDuration);
