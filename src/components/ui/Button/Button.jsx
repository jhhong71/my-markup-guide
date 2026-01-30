// src/components/ui/Button/Button.jsx
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ primary, size, label, onClick }) => {
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={['btn', size, mode].join(' ')}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};