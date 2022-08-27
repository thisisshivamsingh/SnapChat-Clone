import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import "./Chats.css";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

function Chats() {
  return (
    <div className="chats">
      <div className="chats__header">
        <AccountCircleIcon className="chats__avatar" />
        <div className="chats__search">
          <SearchIcon />
          <input placeholder="Friends" type="text"/>
        </div>
        <ChatBubbleIcon className="chats__chatIcon"/>
      </div>
    </div>
  );
}

export default Chats;
