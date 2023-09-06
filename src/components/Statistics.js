export function Statistics({ feedbacks, total, percentage }) {
  return (
    <div>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage}%</p>
    </div>
  );
}
