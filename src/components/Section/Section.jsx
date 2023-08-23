import { FeedbackTitle } from 'components/Feedback/FeedBackBtns.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </section>
  );
};
