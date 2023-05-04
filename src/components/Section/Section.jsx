import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
