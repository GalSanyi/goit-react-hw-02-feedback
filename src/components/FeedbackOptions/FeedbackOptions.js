import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ good, neutral, bad }) {
  return (
    <div>
      <button type="button" onClick={good}>
        good
      </button>
      <button type="button" onClick={neutral}>
        neutral
      </button>
      <button type="button" onClick={bad}>
        bad
      </button>
    </div>
  );
}
FeedbackOptions.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
};
