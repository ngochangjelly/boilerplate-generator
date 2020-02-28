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
<<<<<<< Updated upstream
    GetBeerById: async (id: any) => {
        let res;
        try {
            // fetch beer
=======
<<<<<<< HEAD
=======
    GetBeerById: async (id: Number) => {
        let res;
        try {
>>>>>>> Stashed changes
            res = await Http.Request("GET", `beers/${id}`);
        } catch (error) {
            res = [];
        }
        return res;
    },
<<<<<<< Updated upstream
=======
>>>>>>> 3dc8e550034a18bde7ddaf989c5f4e97e0f7406b
>>>>>>> Stashed changes
};
