import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};
