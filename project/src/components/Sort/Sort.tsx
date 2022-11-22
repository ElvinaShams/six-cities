import React from 'react';
import { SortTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType } from '../../store/action';
import cn from 'classnames';

type PopupClick = MouseEvent & {
  path: Node[];
};

function Sort() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);
  const sortRef = React.useRef();

  const onClickSortItem = (sortType: SortTypes) => {
    dispatch(setSortType(sortType));
    setOpen(false);
  };

  React.useEffect(() => {
    const handelClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current  && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handelClickOutside);
    return () => document.body.removeEventListener('click', handelClickOutside);
  }, []);

  const [open, setOpen] = React.useState(false);

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
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => setOpen(!open)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {open && (
        <ul className="places__options places__options--custom places__options--opened">
          {renderSortType}
        </ul>
      )}
    </form>
  );
}

export { Sort };
