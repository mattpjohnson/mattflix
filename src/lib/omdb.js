import { Exception } from "handlebars";

const baseUrl = 'https://www.omdbapi.com/?apikey=9f572b90&r=json';

const detailsCache = {};

export const omdb = {
    async search(searchFragment) {
        const result = await fetch(`${baseUrl}&s=${searchFragment}`)
            .then(response => response.json());

        if (result.Response !== 'True') {
            throw new Exception(result.Error);
        }

        return result.Search;
    },

    details(imdbID) {
        if (imdbID in detailsCache) {
            return detailsCache[imdbID];
        }

        const resultPromise = fetch(`${baseUrl}&i=${imdbID}`)
            .then(response => response.json());

        detailsCache[imdbID] = resultPromise;

        return detailsCache[imdbID];
    }
};