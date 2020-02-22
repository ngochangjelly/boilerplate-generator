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
    const { name } = beer;
    return (
        <div className="container">
            <div className="card">
                <h3 className="title">{name}</h3>
                <div className="bar">
                    <div className="emptybar" />
                    <div className="filledbar" />
                </div>
                <div className="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50" />
                    </svg>
                </div>
            </div>
            <div className="card">
                <h3 className="title">Card 2</h3>
                <div className="bar">
                    <div className="emptybar" />
                    <div className="filledbar" />
                </div>
                <div className="circle">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle className="stroke" cx="60" cy="60" r="50" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export { Ticket };
