import { Icon, Marker } from 'leaflet';
import { useRef, useEffect } from 'react';
import { iconAnchor, IconSize, MapIconUrl } from '../../const';
import { useMap } from '../../hooks';
import { City, Points } from '../../types/cities';
import 'leaflet/dist/leaflet.css';
import { RoomOffer } from '../../types/room-offer';

type MapProps = {
  className: 'cities' | 'property',
  city: City,
  points: RoomOffer[],
  activeCard?: number | null,
};

const defaultCustomIcon = new Icon({
  iconUrl: MapIconUrl.Default,
  iconSize: [IconSize.Width, IconSize.Height],
  iconAnchor: [iconAnchor.Width / 2, iconAnchor.Height],
});

const currentCustomIcon = new Icon({
  iconUrl: MapIconUrl.Active,
  iconSize: [IconSize.Width, IconSize.Height],
  iconAnchor: [iconAnchor.Width / 2, iconAnchor.Height],
});

function Map({ className, city, points, activeCard }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activeCard && point.id === activeCard
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, activeCard, city]);

  return (
    <section className={`${className}__map map`}>
      <div style={{ height: '100%' }} ref={mapRef}></div>
    </section>
  );
}

export { Map };
