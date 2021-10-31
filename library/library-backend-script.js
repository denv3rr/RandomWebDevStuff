
  
class Media {
    constructor(title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
  
    get title() {
        return this._title;
    }
  
    get isCheckedOut() {
        return this._isCheckedOut;
    }
  
    get ratings() {
        return this._ratings;
    }
  
    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }
  
    toggleCheckOutStatus() {
        this.isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating(ratings) {
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating);
        return ratingsSum / this.ratings.length;
    }
  
    addRating(value) {
        this.ratings.push(value);
    }
};
  
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
  
    get author() {
        return this._author;
    }
  
    get pages() {
        return this._pages;
    }
};
  
class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = movieCast;
    }
  
    get director() {
        return this._director;
    }
  
    get runTime() {
        return this._runTime;
    }
};
  
class CD extends Media {
    constructor(artist, title, songs, bandMembers) {
        super(title);
        this._artist = artist;
        this._songs = songs;
        this._bandMembers = bandMembers;
    }
  
    get artist() {
        return this._artist;
    }
  
    get songs() {
        return this._songs;
    }
  
    get bandMembers() {
        return this._bandMembers;
    }
  
    addSongs(song) {
        this.songs.push(song);
    }
    
    /* (***(Incomplete)*** This function will provide an option to shuffle the songs within the array of song titles.):
  
    shuffle(songs) {
        for (var i = this.songs.length - 1; i < 0; i--) {
            var j = Math.floor(Math.random() * (i + 1))
            var hold = songs[i];
            songs[i] = songs[j];
            songs[j] = hold;
        }
        return songs;
    }
  
    */
};
  
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
const speed = new Movie('Movie', 'Jan de Bont', 'Speed', 116);
const nevermind = new CD('Nirvana', 'Nevermind', ['Song 1', 'Song 2', 'Song 3'], ['Kurt Cobain', 'Dave Grohl', 'Krist Novoselic']);
  
/* (Examples/Tests):
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything);
console.log(historyOfEverything.isCheckedOut);
  
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
  
console.log(historyOfEverything);
console.log(historyOfEverything.getAverageRating());
  
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed);
console.log(speed.getAverageRating());
  
nevermind.addSongs('Smells Like Teen Spirit');
console.log(nevermind.songs);
nevermind.toggleCheckOutStatus();
nevermind.addRating(5);
nevermind.addRating(4);
nevermind.addRating(5);
console.log(nevermind);
*/