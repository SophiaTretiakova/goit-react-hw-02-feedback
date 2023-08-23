export const Statistics = ({ good, neutral, bad }) => {
  return (
    <section>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
      </ul>
    </section>
  );
};
