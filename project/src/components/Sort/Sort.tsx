import { useRef, useState } from 'react';
import { SortTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useEscapePress } from '../../hooks/useEscapePress';
import { getSortType } from '../../store/app-process/selectors';
import { sortOffers } from '../../store/app-process/app-process';

function Sort() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector(getSortType);
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClickSortItem = (sortType: SortTypes) => {
    dispatch(sortOffers(sortType));
    setOpen(false);
  };

  useEscapePress(() => setOpen(false));
  useOnClickOutside(sortRef, () => setOpen(false));

  const renderSortType = Object.values(SortTypes).map((sort) => (
    <li
      className={cn('places__option', {
        'places__option--active': sort === sortType,
      })}
      key={sort}
      onClick={() => onClickSortItem(sort)}
    >
      {sort}
    </li>
  ));

  return (
    <form className="places__sorting" action="#" method="get">
      <div ref={sortRef}>
        <span className="places__sorting-caption">Sort by&nbsp;</span>
        <span className="places__sorting-type" onClick={() => setOpen(!open)}>
          {sortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={cn('places__options places__options--custom', {
            'places__options--opened': open,
          })}
        >
          {renderSortType}
        </ul>
      </div>
    </form>
  );
}

export { Sort };
