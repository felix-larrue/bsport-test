import React, { Component } from "react";
import Session from "./session";
import moment from "moment";

class SessionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    getUrl = (details) => {
        const { date, month, year } = details;
        const dateString = year + "-" + (month + 1) + "-" + date;
        return (
            "https://back.staging.bsport.io/api/v1/offer/?date=" +
            dateString +
            "&company=6"
        );
    };

    getData = (URL) => {
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    isLoaded: true,
                    items: json,
                });
            });
    };

    componentDidMount() {
        const URL = this.getUrl(this.props.details);
        this.getData(URL);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.details.date !== this.props.details.date) {
            this.setState({ isLoaded: false });
            const URL = this.getUrl(this.props.details);
            this.getData(URL);
        }
    }

    extractTimeFromMoment = (m) => ({ h: m.hour(), m: m.minute() });

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div className="text-center">Loading ...</div>;
        } else {
            const count = this.state.items.count;
            const badgeMessage =
                count > 1
                    ? count + " séances disponibles"
                    : count === 1
                    ? "Une séance disponible"
                    : "Aucune séance disponible";
            const badgeClasses =
                "badge m-4 p-1 badge-pill " +
                (count > 0 ? "badge-success" : "badge-danger");
            const sessionsList = items.results.map((result) => {
                let currentMoment = moment(result.date_start);
                const start = this.extractTimeFromMoment(currentMoment);
                currentMoment.add(result.duration_minute, "minutes");
                const end = this.extractTimeFromMoment(currentMoment);
                return (
                    <React.Fragment key={result.id}>
                        <li className="m-1">
                            <Session start={start} end={end} />
                        </li>
                    </React.Fragment>
                );
            });

            return (
                <div>
                    <span className={badgeClasses}>
                        <h4>{badgeMessage}</h4>
                    </span>
                    <ul>{sessionsList}</ul>
                </div>
            );
        }
    }
}

export default SessionsList;
