import React from "react";
import moment from "moment";

const Session = function (props) {
    const { dateStart, duration, coach } = props;
    const coachName = coach.user.name;
    return (
        <div>
            <div className="bg-light border border-dark container m-2">
                <p className="">
                    {`${moment(dateStart).format("HH:mm")} - ${moment(dateStart)
                        .add(duration, "minutes")
                        .format("HH:mm")} | Coach : ${coachName}`}
                </p>
            </div>
        </div>
    );
};

export default Session;
