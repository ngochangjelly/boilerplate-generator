// #region Local Imports
import { Http } from "@Services";
// #endregion Local Imports

export const BeerDetailsService = {
    GetRandomBeer: async () => {
        let res;
        try {
            res = await Http.Request("GET", "beers/random");
        } catch (error) {
            res = [];
        }
        return res;
    },
};
