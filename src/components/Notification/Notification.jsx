import PropTypes from 'prop-types';

export const Notification = ({ massage }) => {
  return (
    <>
      <h4>{massage}</h4>
    </>
  );
};

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};
