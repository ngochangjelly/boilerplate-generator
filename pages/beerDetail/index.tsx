// #region Global Imports
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Container } from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { BeersService } from "@Services/API/Beers";
import { HomeActions } from "@Actions";

// #endregion Local Imports

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const BeerDetail: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    // https://api.punkapi.com/v2/beers/1
    const [beer, setBeer]: any[] = useState([]);
    useEffect(() => {
        BeersService.GetBeers().then(res => {
            setBeer(res);
        });
    }, []);
    return <Container>hello</Container>;
};

BeerDetail.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(BeerDetail);

export default Extended;
