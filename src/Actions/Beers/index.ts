// #region Global Imports
import { Dispatch } from "redux";
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const Beers = {
    Map: (payload: {}) => {
        return {
            payload,
            type: ActionConsts.Home.SetReducer,
        };
    },

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
    }),

    GetBeers: () => async () => {},
};
