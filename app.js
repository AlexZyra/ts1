"use strict";
// let firstWord: string = "Hello World on TS"
// console.log(firstWord);
class FilmList {
    constructor(films) {
        this.items = films;
        this.filters = {};
    }
    applyFilters(filters) {
        this.filters = filters;
        this.items = this.items.filter((film) => (!filters.ratingFilter ||
            (film.rating >= filters.ratingFilter.filter && film.rating <= filters.ratingFilter.filterTo))
            && (!filters.titleFilter || film.title.toLowerCase().includes(filters.titleFilter.filter.toLowerCase())));
    }
    applySearchValue(searchValue) {
        this.items = this.items.filter((film) => film.title.toLowerCase().includes(searchValue.toLowerCase()));
    }
}
class CategoryList {
    constructor(categories) {
        this.items = categories;
        this.filters = {};
    }
    applyFilters(filters) {
        this.filters = filters;
        this.items.forEach((category) => {
            category.films = category.films.filter((film) => (!filters.ratingFilter ||
                (filters.ratingFilter.filter <= film.rating && film.rating <= filters.ratingFilter.filterTo))
                && (!filters.titleFilter || film.title.toLowerCase().includes(filters.titleFilter.filter.toLowerCase())));
        });
    }
    applySearchValue(searchValue) {
        this.items.forEach((category) => {
            category.films = category.films.filter((film) => film.title.toLowerCase().includes(searchValue.toLowerCase()));
        });
    }
}
