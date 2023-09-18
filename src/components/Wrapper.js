import { useSplit } from "../context/SplitContext";
import FriendsList from "./FriendsList";
import FormSplitBill from "./FormSplitBill";
import FormAddFriend from "./FormAddFriend";
import Button from "./Button";

function Wrapper() {
  const {
    showAddFriend,
    handleAddFriend,
    handleShowAddFriend,
    selectedFriend,
  } = useSplit();
  return (
    <>
      <div className="sidebar">
        <FriendsList />

        {showAddFriend && <FormAddFriend />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill key={selectedFriend.id} />}
    </>
  );
}

export default Wrapper;
