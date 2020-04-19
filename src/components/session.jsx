import React from "react";

const Session = function (props) {
    const { h: startH, m: startM } = props.start;
    const { h: endH, m: endM } = props.end;
    return (
        <div>
            <div className="bg-light border border-dark container">
                <p className="">
                    {`${startH}H${
                        startM <= 9 ? "0" + startM : startM
                    } - ${endH}H${endM <= 9 ? "0" + endM : endM}`}
                </p>
            </div>
        </div>
    );
};

export default Session;
