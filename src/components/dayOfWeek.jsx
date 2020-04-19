import React, { Component } from "react";

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
        const classes =
            "btn m-2 btn-sm " +
            (this.props.selected ? "btn-success" : "btn-secondary");
        const { day, date, month, year } = this.props.details;
        return (
            <React.Fragment>
                <button
                    onClick={() => this.props.onDaySelected(day)}
                    className={classes}
                >
                    {this.dow(day) + //Jour de la semaine en français
                    " " +
                    date +
                    " " +
                    this.month(month) + //Mois en français
                        " " +
                        year}
                </button>
            </React.Fragment>
        );
    }
}

export default DayOfWeek;
