import PropTypes from 'prop-types';
import { ButtonIcon } from './iconBtn.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => {
  return (
    <ButtonIcon type="button" onClick={onClick} {...allyProps}>
      {children}
    </ButtonIcon>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
