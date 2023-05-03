export const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
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
        Total:<span> {countTotalFeedback()}</span>
      </p>
      <p>
        Positive feedback:
        <span> {countPositiveFeedbackPercentage()}%</span>
      </p>
    </>
  );
};
