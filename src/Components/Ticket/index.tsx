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
    return <div className="ticket">Ticket</div>;
};

export { Ticket };
