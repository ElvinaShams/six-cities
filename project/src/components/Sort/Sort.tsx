import React, { useRef, useState, KeyboardEvent } from 'react';
import { SortTypes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortType } from '../../store/action';
import cn from 'classnames';
import { useOnClickOutside } from '../../hooks/useClick';

type Event = KeyboardEvent<HTMLImageElement>;

function Sort() {
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClickSortItem = (sortType: SortTypes) => {
    dispatch(setSortType(sortType));
    setOpen(false);
  };

  const onDocumentKeyDown = (event: Event) => {
    if (event.key === 'Escape') {
      handleClickInside();
    }
  };

  const openSortList = () => {
    setOpen(!open);
    document.addEventListener('keydown', onDocumentKeyDown);
  };

  const handleClickInside = () => {
    setOpen(false);
    document.removeEventListener('keydown', onDocumentKeyDown);
  };

  let handelClickOutside = useOnClickOutside(sortRef, handleClickInside);

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
      <div ref={handelClickOutside}>
        <span className="places__sorting-caption">Sort by&nbsp;</span>
        <span className="places__sorting-type" onClick={openSortList}>
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
      </div>
    </form>
  );
}

export { Sort };
