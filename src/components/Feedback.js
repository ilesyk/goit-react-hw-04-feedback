export function Feedback({ options, changeFeedback }) {
  return (
    <div>
      {options.map(option => {
        return (
          <button key={option} onClick={() => changeFeedback(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
}
