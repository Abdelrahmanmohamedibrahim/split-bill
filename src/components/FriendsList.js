import { useSplit } from "../context/SplitContext";
import Friend from "./Friend";
function FriendsList() {
  const { friends, selectedFriend, onSelection } = useSplit();
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
