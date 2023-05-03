export const FeedbackOptions = ({ handleIncreaseGood, handleIncreaseNeutral, handleIncreaseBad }) => {
  return (
    <>
      <button type="button" onClick={handleIncreaseGood}>
        good
      </button>
      <button type="button" onClick={handleIncreaseNeutral}>
        neutral
      </button>
      <button type="button" onClick={handleIncreaseBad}>
        bad
      </button>
    </>
  );
};
