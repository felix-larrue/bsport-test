import React, { Component } from "react";
import WeekCalendar from "./components/weekCalendar";
import SessionsList from "./components/sessionsList";
import moment from "moment";

class App extends Component {
    constructor(props) {
        super(props);
        let days = []; //Initialisation du state avec les 7 jours de la semaine en cours
        const currentMoment = moment().startOf("isoWeeks"); //Le lundi de la semaine en cours
        for (let i = 0; i < 7; i++) {
            days.push({
                day: currentMoment.weekday(),
                date: currentMoment.date(),
                month: currentMoment.month(),
                year: currentMoment.year(),
            });
            currentMoment.add(1, "days");
        }
        this.state = {
            days: days,
            daySelected: moment().weekday(),
        };
    }

    handleDaySelected = (day) => {
        this.setState({ daySelected: day });
    };

    daySelectedDetails = () => {
        let res;
        const daySelected = this.state.daySelected;
        if (daySelected === 0) {
            //Si dimanche
            res = this.state.days[6];
        } else {
            res = this.state.days[daySelected - 1];
        }
        return res;
    };

    render() {
        return (
            <React.Fragment>
                <WeekCalendar
                    days={this.state.days}
                    daySelected={this.state.daySelected}
                    onDaySelected={this.handleDaySelected}
                />
                <SessionsList details={this.daySelectedDetails()} />
            </React.Fragment>
        );
    }
}

export default App;
