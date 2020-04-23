import React, { Component } from "react";
import Session from "./session";

class CoachDataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coach: {},
            isLoaded: false,
        };
    }

    getCoachUrl = (coachId) =>
        `https://back.staging.bsport.io/api/v1/coach/${coachId}/`;

    getCoachData = (coachUrl) => {
        fetch(coachUrl)
            .then((res) => res.json())
            .then((json) => {
                this.setState({ coach: json, isLoaded: true });
            });
    };

    componentDidMount() {
        const coachUrl = this.getCoachUrl(this.props.coachId);
        this.getCoachData(coachUrl);
    }

    render() {
        const { dateStart, duration } = this.props;
        if (!this.state.isLoaded) {
            return <div>Loading ...</div>;
        } else {
            return (
                <Session
                    dateStart={dateStart}
                    duration={duration}
                    coach={this.state.coach}
                />
            );
        }
    }
}

export default CoachDataProvider;
