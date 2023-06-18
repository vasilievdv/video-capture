import React, { useId, Dispatch, SetStateAction } from 'react';
import { Event } from '../MainPage';
import styles from './events-list.module.css';

type Props = {
  events: Event[];
  playbackEvent?: number;
  setPlaybackEvent?: Dispatch<SetStateAction<number>>;
};

function EventsList(props: Props) {
  const { events, playbackEvent, setPlaybackEvent } = props;

  const playbackEventSelectId = useId();

  function formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    let mm = date.getMinutes().toString();
    let ss = date.getSeconds().toString();
    let sss = date.getMilliseconds().toString();
    if (+mm < 10) {
      mm = `0${mm}`
    }
    if (+ss < 10) {
      ss = `0${ss}`
    }
    if (+sss < 100) {
      sss = `${sss}0`;
    }
    return `${mm}:${ss}:${sss}`;
  }

  return (
    <div className={styles.eventsWrapper}>
      <label htmlFor={playbackEventSelectId}>Select playback event:</label>
      <select
        id={playbackEventSelectId}
        value={playbackEvent}
        onChange={(event) => {
          setPlaybackEvent!(+event.target.value);
        }}
      >
        <option value={0}>00:00:000</option>
        {events.map((e) => (
          <option value={e.timestamp} key={e.id}>
            {formatDate(e.timestamp)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default EventsList;
