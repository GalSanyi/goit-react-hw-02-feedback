import React from 'react';
import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import shortid from 'shortid';
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
          <li id={shortid.generate()}>good: {good}</li>
          <li id={shortid.generate()}>neutral: {neutral}</li>
          <li id={shortid.generate()}>bad: {bad}</li>
          <li id={shortid.generate()}>total: {total}</li>
          <li id={shortid.generate()}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback givin" />}
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
