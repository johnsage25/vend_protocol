/* eslint-disable prettier/prettier */
import { EuiFlexGroup, EuiFlexItem, EuiFlexGrid } from '@elastic/eui';
import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  milliseconds,
  completed,
}) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div>
          <EuiFlexGrid className='countdown-list'>
              <EuiFlexItem grow={false}  component="span" grow={false} className="list-countdown-flex">
                <div className='_cdown'>{days}</div>
                <div>Days</div>
              </EuiFlexItem>
              <EuiFlexItem grow={false}  component="span" grow={false} className="list-countdown-flex">
              <div className='_cdown'>{hours}</div>
              <div>Hours</div>
              </EuiFlexItem>
              <EuiFlexItem grow={false}  component="span" grow={false} className="list-countdown-flex">
                <div className='_cdown'>{minutes}</div>
                <div>Minutes</div>
              </EuiFlexItem>
              <EuiFlexItem grow={false}  component="span" grow={false} className="list-countdown-flex">
                <div className='_cdown'>{seconds}</div>
                <div>Seconds</div>
              </EuiFlexItem>

          </EuiFlexGrid>
      </div>
    );
  }
};

const CountdownBlock = () => {
  return (
    <Countdown
      autoStart={true}
      date={'2022-02-01T01:02:03'}
      renderer={renderer}
    />
  );
};

export default CountdownBlock;
