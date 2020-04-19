import React, { Component } from "react";
import moment from "moment";
import DayOfWeek from "./dayOfWeek";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: true,
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://back.staging.bsport.io/api/v1/offer/?min_date=2020-03-15&max_date=2020-04-17&company=6&page_size=50"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div>
          <ul>
            {items.results.map((item) => {
              {
                const startMoment = moment(item.date_start);
              }
              <li key={item.id}>
                Début : {`${startMoment.hour()}H${startMoment.minute()}`} | Fin
                :{" "}
                {`${startMoment
                  .add(item.duration_minute, "minutes")
                  .hour()}H${startMoment.minute()}`}{" "}
                |{item.recurrence_id} | {item.full}
              </li>;
            })}
          </ul>
        </div>
      );
    }
  }
}

export default Test;
