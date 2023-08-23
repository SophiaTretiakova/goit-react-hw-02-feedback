import { FeedbackSection, FeedbackTitle } from './FeedBackBtns.styled';

export const FeedbackBtns = ({
  onGoodClickBtn,
  onNeutralClickBtn,
  onBadClickBtn,
}) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <ul>
        <li>
          <button onClick={onGoodClickBtn} value="good">
            Good
          </button>
        </li>
        <li>
          <button onClick={onNeutralClickBtn} value="neutral">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={onBadClickBtn} value="bad">
            Bad
          </button>
        </li>
      </ul>
    </FeedbackSection>
  );
};
