import { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncreaseGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncreaseNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncreaseBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leavel feedback</h2>
        <button type="button" onClick={this.handleIncreaseGood}>
          good
        </button>
        <button type="button" onClick={this.handleIncreaseNeutral}>
          neutral
        </button>
        <button type="button" onClick={this.handleIncreaseBad}>
          bad
        </button>
        <h3>Statistics</h3>
        <p>
          Good:<span> {good}</span>
        </p>
        <p>
          Neutral:<span> {neutral}</span>
        </p>
        <p>
          Bad:<span> {bad}</span>
        </p>
        <p>
          Total:<span> {this.countTotalFeedback()}</span>
        </p>
        <p>
          Positive feedback:
          <span> {this.countPositiveFeedbackPercentage()}%</span>
        </p>
      </>
    );
  }
}
