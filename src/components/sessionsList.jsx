import React from "react";
import CoachDataProvider from "./coachDataProvider";

const SessionsList = (props) => {
    const { offers } = props;
    const count = offers.count;
    const badgeMessage =
        count > 1
            ? count + " séances disponibles"
            : count === 1
            ? "Une séance disponible"
            : "Aucune séance disponible";
    const badgeClasses =
        "badge m-4 p-1 badge-pill " +
        (count > 0 ? "badge-success" : "badge-danger");

    return (
        <div>
            <h4>
                <span className={badgeClasses}>{badgeMessage}</span>
            </h4>
            {offers.results.map((offer) => (
                <CoachDataProvider
                    dateStart={offer.date_start}
                    duration={offer.duration_minute}
                    coachId={offer.coach}
                    key={offer.id}
                />
            ))}
        </div>
    );
};

export default SessionsList;
