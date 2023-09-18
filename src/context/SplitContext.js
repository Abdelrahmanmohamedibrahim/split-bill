import { createContext, useContext } from "react";
import { useState } from "react";
const initialFriends = [];
const SplitContext = createContext();
function SplitProvider({ children }) {
  const [friends, setFriends] = useState([]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }
  return (
    <SplitContext.Provider
      value={{
        friends,
        showAddFriend,
        selectedFriend,
        handleAddFriend,
        onSelection: handleSelection,
        handleShowAddFriend,
        handleSplitBill,
      }}
    >
      {children}
    </SplitContext.Provider>
  );
}
function useSplit() {
  const context = useContext(SplitContext);
  return context;
}
export { useSplit, SplitProvider };
