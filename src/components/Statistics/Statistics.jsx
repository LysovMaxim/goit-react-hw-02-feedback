import PropTypes from 'prop-types';
import {Listel,List,Number} from "./Statistics.style"

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <List>
        <Listel>
          Good<Number> {good}</Number>
        </Listel>
        <Listel>
          Neutral<Number> {neutral}</Number>
        </Listel>
        <Listel>
          Bad<Number> {bad}</Number>
        </Listel>
        <Listel>
          Total<Number> {total}</Number>
        </Listel>
        <Listel>
          Positive feedback
          <Number> {positivePercentage}%</Number>
        </Listel>
      </List>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
