import { Icon, Marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import { iconAnchor, IconSize, MapIconUrl } from '../../const';
import { useMap } from '../../hooks';
import { City, Points } from '../../types/map';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className: 'cities' | 'property',
  city: City,
  points: Points,
  activeCard: number | null,
};

const defaultCustomIcon = new Icon({
  iconUrl: MapIconUrl.Default,
  iconSize: [IconSize.width, IconSize.height],
  iconAnchor: [iconAnchor.width / 2, iconAnchor.height],
});

const currentCustomIcon = new Icon({
  iconUrl: MapIconUrl.Active,
  iconSize: [IconSize.width, IconSize.height],
  iconAnchor: [iconAnchor.width / 2, iconAnchor.height],
});

function Map({ className, city, points, activeCard }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && activeCard !== null) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude,
        });

        marker
          .setIcon(
            activeCard !== undefined && point.id === activeCard
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, activeCard]);

  return (
    <section className={`${className}__map map`}>
      <div style={{ height: '100%' }} ref={mapRef}></div>
    </section>
  );
}

export { Map };
