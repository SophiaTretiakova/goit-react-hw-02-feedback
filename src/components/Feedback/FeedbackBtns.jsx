import { FeedbackSection, FeedbackTitle } from './FeedBackBtns.styled';

export const FeedbackBtns = ({
  onLeaveFeedback: { onGood, onNeutral, onBad },
}) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <ul>
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
      </ul>
    </FeedbackSection>
  );
};
