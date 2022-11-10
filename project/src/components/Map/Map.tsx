import React from 'react';

type MapProps = {
  className: 'cities' | 'property',
};

function Map({ className }: MapProps) {
  return <section className={`${className}__map map`} />;
}

export { Map };
