import React, { Component } from "react";
import WeekCalendar from "./components/weekCalendar";
import moment from "moment";
import OfferDataProvider from "./components/offerDataProvider";

class App extends Component {
    constructor(props) {
        super(props);
        let dates = []; //Initialisation du state avec les 7 jours de la semaine en cours
        const currentMoment = moment().startOf("isoWeeks"); //Le lundi de la semaine en cours
        for (let i = 0; i < 7; i++) {
            dates.push(currentMoment.format()); //Format des dates : "2014-09-08T08:02:17-05:00"
            currentMoment.add(1, "days");
        }
        this.state = {
            dates: dates,
            daySelected: moment().format(), //Au démarrage, le jour courant est sélectionné
        };
    }

    handleDaySelected = (date) => {
        this.setState({ daySelected: date });
    };

    render() {
        return (
            <div>
                <WeekCalendar
                    dates={this.state.dates}
                    daySelected={this.state.daySelected}
                    onDaySelected={this.handleDaySelected}
                />
                <OfferDataProvider daySelected={this.state.daySelected} />
            </div>
        );
    }
}

export default App;
