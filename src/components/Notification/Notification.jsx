import { StstisticsNoFeedback } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <StstisticsNoFeedback>
      <p>{message}</p>
    </StstisticsNoFeedback>
  );
};
