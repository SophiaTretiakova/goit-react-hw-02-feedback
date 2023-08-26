import { FeedbackSection, BtnsList } from './FeedBackBtns.styled';
import propTypes from 'prop-types';

export const FeedbackBtns = ({
  onLeaveFeedback: { onGood, onNeutral, onBad },
}) => {
  return (
    <FeedbackSection>
      <BtnsList>
        <li>
          <button onClick={onGood} value="good">
            Good
          </button>
        </li>
        <li>
          <button onClick={onNeutral} value="neutral">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={onBad} value="bad">
            Bad
          </button>
        </li>
      </BtnsList>
    </FeedbackSection>
  );
};

FeedbackBtns.propTypes = {
  onGood: propTypes.func,
  onNeutral: propTypes.func,
  onBad: propTypes.func,
};
