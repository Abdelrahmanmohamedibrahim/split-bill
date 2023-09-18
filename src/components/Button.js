import { useSplit } from "../context/SplitContext";

function Button({ children }) {
  const { handleShowAddFriend } = useSplit();

  return (
    <button className="button" onClick={handleShowAddFriend}>
      {children}
    </button>
  );
}

export default Button;
