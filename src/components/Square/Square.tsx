import React from 'react';
import styles from './square.module.css'

type Props = {
  left?: number;
    top?: number;
    width?: number;
    height?: number;
}

function Square(props: Props) {
  const { left, top, width, height } = props;
  return (
    <div
      className={styles.squareWrapper}
      style={{
        left: left!.toString() + 'px',
        top: top!.toString() + 'px',
        width: width!.toString() + 'px',
        height: height!.toString() + 'px',
      }}
    />
  );
}

export default Square;
