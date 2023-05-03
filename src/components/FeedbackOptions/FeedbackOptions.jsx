export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(el => {
        return (
          <button key={el} type="button" name={el} onClick={onLeaveFeedback}>
            {el}
          </button>
        );
      })}
    </div>
  );
};
