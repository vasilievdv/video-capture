import React, { useEffect, useState, useRef } from 'react';
import VideoPlayer from '../VideoPlayer';
import Square from '../Square';
import EventsList from '../EventsList';
import { Event } from '../MainPage';
import { SRC } from '../../variables';
import { Spinner } from 'react-bootstrap';
import { getEventsRequest } from './actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './main-page.module.css';

function MainPage() {
   const { data, fetch } = useAppSelector(
     (state) => state.events.events
   );
   const [currentEvents, setcurrentEvents] = useState<Event[]>([]);
   const [playbackEvent, setPlaybackEvent] = useState<number>(0);
   
   const dispatch = useAppDispatch();

   useEffect(() => {
     dispatch(getEventsRequest());
   }, []);
  
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentEventsRef = useRef<Event[]>([]);

  useEffect(() => {
    videoRef.current!.currentTime = playbackEvent / 1000;
  }, [playbackEvent]);

  useEffect(() => {
    currentEventsRef.current = currentEvents;
  }, [currentEvents]);

  useEffect(() => {
    let video = videoRef.current;

    let index = 0;
    function closestIndex() {
      let target = Math.floor(video!.currentTime * 1000);
      let closest = 0;
      let closestDiff = Math.abs(target - data[0]?.timestamp);

      for (let i = 1; i < data.length; i++) {
        const diff = Math.abs(target - data[i]?.timestamp);

        if (diff < closestDiff) {
          closest = i;
          closestDiff = diff;
        }
      }
      index = closest;
      return closest;
    }

    function fireEventOnCurrentTime() {
      if (Math.floor(video!.currentTime * 1000) >= data[index]?.timestamp) {
        setcurrentEvents((currentEvents) => [
          ...currentEvents,
          data[index - 1],
        ]);
        index++;
      }

      if (currentEventsRef.current.length) {
        setcurrentEvents((currentEvents) => [
          ...currentEvents.filter(
            (item) =>
              item.timestamp + item.duration >=
              Math.floor(video!.currentTime * 1000)
          ),
        ]);
      }
    }

    video?.addEventListener('timeupdate', fireEventOnCurrentTime);
    video?.addEventListener('play', closestIndex);
    video?.addEventListener('seeking', closestIndex);

    function clear() {
      video?.removeEventListener('timeupdate', fireEventOnCurrentTime);
    }
    video?.addEventListener('stop', clear);
    return () => {
      video?.removeEventListener('timeupdate', fireEventOnCurrentTime);
      video?.removeEventListener('play', closestIndex);
      video?.removeEventListener('stop', clear);
      video?.removeEventListener('seeking', closestIndex);
    };
  }, [data]);

   if (fetch === 'pending') {
     return <Spinner animation="grow" />;
   }
  
  return (
    <div className={styles.videoWrapper}>
      <VideoPlayer src={SRC} videoRef={videoRef} />
      {currentEvents?.map((e) => (
        <Square
          key={e.id}
          left={e.zone.left}
          top={e.zone.top}
          width={e.zone.width}
          height={e.zone.height}
        />
      ))}
      <EventsList
        events={data}
        playbackEvent={playbackEvent}
        setPlaybackEvent={setPlaybackEvent}
      />
    </div>
  );
}

export default MainPage;
