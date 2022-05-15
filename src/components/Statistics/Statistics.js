import React from 'react';
import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2>Statistics</h2>
      {total > 0 && (
        <ul className={s.list}>
          <li>good: {good}</li>
          <li>neutral: {neutral}</li>
          <li>bad: {bad}</li>
          <li>total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback givin" />}
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
