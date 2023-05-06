import PropTypes from 'prop-types';
import {FeedbackBtn} from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(el => {
        return (
          <FeedbackBtn key={el} type="button" name={el} onClick={onLeaveFeedback}>
            {el}
          </FeedbackBtn>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
