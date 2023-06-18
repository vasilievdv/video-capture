import React, { useId, Dispatch, SetStateAction, memo } from 'react';
import { Event } from '../MainPage';
import { formatDate } from '../../utils';
import styles from './events-list.module.css';

type Props = {
  events: Event[];
  playbackEvent: number;
  setPlaybackEvent: Dispatch<SetStateAction<number>>;
};

function EventsList(props: Props) {
  const { events, playbackEvent, setPlaybackEvent } = props;

  const playbackEventSelectId = useId();

  return (
    <div className={styles.eventsWrapper}>
      <label htmlFor={playbackEventSelectId}>Select playback event:</label>
      <select
        id={playbackEventSelectId}
        value={playbackEvent}
        onChange={(event) => {
          setPlaybackEvent(+event.target.value);
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

export default memo(EventsList);
