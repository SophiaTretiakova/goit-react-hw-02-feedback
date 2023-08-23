import { FeedbackTitle } from 'components/Feedback/FeedBackBtns.styled';
import { MainSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <MainSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </MainSection>
  );
};
