// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import "./style.scss";
// #endregion Local Imports

// #region Interdace Imports
import { ITicket } from "./Ticket";
// #endregion Interdace Imports

const Ticket: React.FunctionComponent<ITicket.IProps> = (
    props
): JSX.Element => {
    const { beer }: any = props;
    const { name, image_url } = beer;
    return (
        <div className="card">
            <h3 className="title">{name}</h3>
            <div className="bar">
                <div className="emptybar" />
                <div className="filledbar" />
            </div>
            <div className="beer-image">
                <img data-loading="lazy" src={image_url} />
            </div>
        </div>
    );
};

export { Ticket };
