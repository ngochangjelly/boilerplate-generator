// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

export const BeersService = {
    GetBeers: async () => {
        let response;
        try {
            response = await Http.Request("GET", "beers");
        } catch (error) {
            response = [];
        }
        return response;
    },
    GetBeerById: async id => {
        let response;
        try {
            response = await Http.Request("GET", `beer/${id}`);
        } catch (error) {
            response = [];
        }
        return response;
    },
};
