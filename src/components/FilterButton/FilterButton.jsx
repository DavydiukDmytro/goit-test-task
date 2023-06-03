import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'srore/selectors';
import { changeTheFilter } from 'srore/users/usersSlice';
import { TYPE_FILTER } from 'utils/constants';
import { Btn, ContainerBtn } from './FilterButton.styled';

export const FilterButton = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectFilter);
  const handleFilterClick = type => {
    dispatch(changeTheFilter(type));
  };
  return (
    <ContainerBtn>
      {Object.keys(TYPE_FILTER).map(key => (
        <Btn
          key={key}
          className={key === active ? 'active' : ''}
          onClick={() => handleFilterClick(key)}
        >
          {TYPE_FILTER[key]}
        </Btn>
      ))}
    </ContainerBtn>
  );
};
