export function Feedback ({options, onLeaveFeedback})  {
    return (
      <div>
            {options.map(option => {
               return <button key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
        })}
      </div>
    );
}