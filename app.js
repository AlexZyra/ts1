"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class FilmList {
    constructor(films) {
        this.films = films;
        this.filters = {};
    }
    applyFilters(filters) {
        this.filters = filters;
        this.films = this.films.filter((film) => !filters.ratingFilter ||
            (film.rating >= filters.ratingFilter.filter &&
                film.rating <= filters.ratingFilter.filterTo));
    }
    applySearchValue(searchValue) {
        this.films = this.films.filter((film) => film.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
}
class CategoryList {
    constructor(categories) {
        this.categories = categories;
        this.filters = {};
    }
    applyFilters(filters) {
        this.filters = filters;
        this.categories.forEach((category) => {
            category.films = category.films.filter((film) => {
                var _a, _b, _c, _d;
                return ((_b = (_a = filters.ratingFilter) === null || _a === void 0 ? void 0 : _a.filter) !== null && _b !== void 0 ? _b : film.rating) <= film.rating &&
                    film.rating <= ((_d = (_c = filters.ratingFilter) === null || _c === void 0 ? void 0 : _c.filterTo) !== null && _d !== void 0 ? _d : film.rating);
            });
        });
    }
    applySearchValue(searchValue) {
        this.categories.forEach((category) => {
            category.films = category.films.filter((film) => film.title.toLowerCase().includes(searchValue.toLowerCase()));
        });
    }
}
