import React, { LegacyRef } from 'react';
import styles from './video.module.css'

type Props = {
  src: string;
  videoRef: LegacyRef<HTMLVideoElement>;
};

function VideoPlayer({ src, videoRef }: Props) {
  return (
    <video controls src={src} ref={videoRef} className={styles.video} />
  );
}

export default VideoPlayer;
