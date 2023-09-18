import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import { SplitProvider } from "./context/SplitContext";
import { useSplit } from "./context/SplitContext";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <SplitProvider>
      <div className="app">
        <Wrapper />
      </div>
    </SplitProvider>
  );
}
