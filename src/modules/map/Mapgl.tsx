import { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import { useMapglContext } from './MapglContext';
import { Clusterer } from '@2gis/mapgl-clusterer';
import { MapWrapper } from './MapWrapper';
import { useGetCarsListQuery } from '../../Api';
import {useAppSelector} from "../../hooks";

export const MAP_CENTER = [30.315792, 59.939024];

export default function Mapgl() {
  const { setMapglContext } = useMapglContext();

  useGetCarsListQuery('');

  // const { data, isLoading } = useGetCarsListQuery('');
  const data = useAppSelector((state) => state.carsList.carsList)

  useEffect(() => {
    let map: mapgl.Map | undefined = undefined;
    let clusterer: Clusterer | undefined = undefined;
    if (data) {
      const markersList = data.map(({ longitude, latitude }) => {
        return { coordinates: [longitude, latitude] };
      });

      load().then((mapgl) => {
        map = new mapgl.Map('map-container', {
          center: MAP_CENTER,
          zoom: 13,
          key: 'a1893935-6834-4445-b97a-3405fb426c5b',
          zoomControl: 'centerRight',
        });

        /**
         * Clusterer plugin
         */

        clusterer = new Clusterer(map, {
          radius: 60,
        });

        clusterer.load(markersList);

        setMapglContext({
          mapglInstance: map,
          mapgl,
        });
      });
    }

    // Destroy the map, if Map component is going to be unmounted
    return () => {
      clusterer && clusterer.destroy();
      map && map.destroy();
      setMapglContext({ mapglInstance: undefined, mapgl: undefined });
    };
  }, [setMapglContext, data]);

  return (
    <>
      <MapWrapper />
    </>
  );
}
