import React, { Component } from "react";

const stillActive = {
  border: "solid 2px #18d8b3",
  borderRadius: "30px"
}
const timeLaps = {
  border: "solid 2px #d81818",
  borderRadius: "30px"
}
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentDidMount() {
    this.getTimeUntil(this.props.deadline);
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
  }
  render() {
    return (
      <div id="still_active" style={this.state.days > 0 ? stillActive : timeLaps}>
        <div className="Clock-days">{this.leading0(this.state.days)}d</div>
        <div className="Clock-hours">
          {this.leading0(this.state.hours)}h
        </div>
        <div className="Clock-minutes">
          {this.leading0(this.state.minutes)}m
        </div>
        <div className="Clock-seconds">
          {this.leading0(this.state.seconds)}s
        </div>
      </div>
    );
  }
}
export default Clock;
