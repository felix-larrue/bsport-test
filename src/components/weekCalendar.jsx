import React from "react";
import DayOfWeek from "./dayOfWeek";

const WeekCalendar = function (props) {
    return (
        <div>
            {props.days.map((jour) => (
                <DayOfWeek
                    details={jour}
                    selected={jour.day === props.daySelected}
                    onDaySelected={props.onDaySelected}
                    key={jour.day}
                />
            ))}
        </div>
    );
};

export default WeekCalendar;
