import React, { Component } from "react";
import SessionsList from "./sessionsList";
import moment from "moment";

class OfferDataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offers: [],
            isLoaded: false,
        };
    }

    getOfferUrl = (date) => {
        const dateForUrl = moment(date).format("YYYY-MM-DD");
        return `https://back.staging.bsport.io/api/v1/offer/?date=${dateForUrl}&company=6`;
    };

    getOfferData = (offerUrl) => {
        fetch(offerUrl)
            .then((res) => res.json())
            .then((json) => {
                this.setState({ offers: json, isLoaded: true });
            });
    };

    componentDidMount() {
        const offerUrl = this.getOfferUrl(this.props.selectedDay);
        this.getOfferData(offerUrl);
    }

    componentDidUpdate(prevProps) {
        if (
            moment(prevProps.daySelected).date() !==
            moment(this.props.daySelected).date()
        ) {
            this.setState({ isLoaded: false });
            const offerUrl = this.getOfferUrl(this.props.daySelected);
            this.getOfferData(offerUrl);
        }
    }

    render() {
        const { isLoaded, offers } = this.state;
        if (!isLoaded) {
            return <div className="text-center">Loading ...</div>;
        } else {
            return <SessionsList offers={offers} />;
        }
    }
}

export default OfferDataProvider;
