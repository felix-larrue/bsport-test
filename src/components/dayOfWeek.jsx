import React, { Component } from "react";
import moment from "moment";

class DayOfWeek extends Component {
    dow = (weekDay) => {
        //Retourne le jour de la semaine en toutes lettres correspondant au numéro weekday
        const days = {
            1: "Lundi",
            2: "Mardi",
            3: "Mercredi",
            4: "Jeudi",
            5: "Vendredi",
            6: "Samedi",
            0: "Dimanche",
        };
        return days[weekDay];
    };

    month = (month) => {
        //Retourne le mois en toutes lettres associé au numéro month (entre 0 et 11)
        const months = {
            0: "Janvier",
            1: "Février",
            2: "Mars",
            3: "Avril",
            4: "Mai",
            5: "Juin",
            6: "Juillet",
            7: "Août",
            8: "Septembre",
            9: "Octobre",
            10: "Novembre",
            11: "Décembre",
        };
        return months[month];
    };

    render() {
        const { date, selected, onDaySelected } = this.props;
        const classes =
            "btn m-2 btn-sm " + (selected ? "btn-success" : "btn-secondary");
        const currentMoment = moment(date);
        return (
            <React.Fragment>
                <button
                    onClick={() => onDaySelected(this.props.date)}
                    className={classes}
                >
                    {this.dow(currentMoment.weekday()) + //Jour de la semaine en français
                    " " +
                    currentMoment.date() +
                    " " +
                    this.month(currentMoment.month()) + //Mois en français
                        " " +
                        currentMoment.year()}
                </button>
            </React.Fragment>
        );
    }
}

export default DayOfWeek;
