import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'srore/selectors';
import { changeTheFilter } from 'srore/users/usersSlice';
import { TYPE_FILTER } from 'utils/constants';

export const FilterButton = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectFilter);
  const handleFilterClick = type => {
    dispatch(changeTheFilter(type));
  };
  return (
    <>
      {Object.keys(TYPE_FILTER).map(key => (
        <button
          key={key}
          className={key === active ? 'active' : ''}
          onClick={() => handleFilterClick(key)}
        >
          {TYPE_FILTER[key]}
        </button>
      ))}
    </>
  );
};
