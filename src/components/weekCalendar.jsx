import React from "react";
import DayOfWeek from "./dayOfWeek";
import moment from "moment";

const WeekCalendar = function (props) {
    return (
        <div>
            {props.dates.map((date) => (
                <DayOfWeek
                    date={date}
                    key={date}
                    selected={
                        moment(date).date() === moment(props.daySelected).date()
                    }
                    onDaySelected={props.onDaySelected}
                />
            ))}
        </div>
    );
};

export default WeekCalendar;
