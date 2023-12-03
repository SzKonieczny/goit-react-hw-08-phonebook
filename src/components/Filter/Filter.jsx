import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/sliceFilter';
import { FilterBox, FilterInp, Label } from './filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <FilterBox>
      <Label>
        Find contacts by name
        <FilterInp type="text" onChange={changeFilter} />
      </Label>
    </FilterBox>
  );
};

Event.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
