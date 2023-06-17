import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGV2aGFtemFtZWhib29iIiwiYSI6ImNsajAzMGFqbTBjb3Yzb3MzejZ0Y2o0bXoifQ.sP5mg3RiaVMlgcI-c-yPdA';

const ListingsMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    // @ts-ignore
    map.current = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [lng, lat],
      zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    // @ts-ignore
    map.current.on('move', () => {
      // @ts-ignore
      setLng(map.current.getCenter().lng.toFixed(4));
      // @ts-ignore
      setLat(map.current.getCenter().lat.toFixed(4));
      // @ts-ignore
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="relative">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default ListingsMap;
