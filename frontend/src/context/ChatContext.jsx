import { createContext, useState } from "react";

const ChatContext=createContext();

function ChatContextProvider({children}){
  const [allContacts, setAllContacts]=useState([
    {
      name:"Rajeev Singh", 
      messages:[
        {
          message:"Hi", 
          sender:"Rajeev Singh", 
          sentTime:1, 
          isSender:true
        },
        {
          message:"Hello",
          sender:"Deepak Singh",
          sentTime:2,
          isSender:false,
        },
        {
          message:"How are you?",
          sender:"Rajeev Singh",
          sentTime:3,
          isSender:true,
        },
      ]
    },
    {
      name:"Ms. Poonam", 
      messages:[
        {
          message:"Hi", 
          sender:"Ms. Poonam", 
          sentTime:1, 
          isSender:true
        },
        {
          message:"Hello",
          sender:"Deepak Singh",
          sentTime:2,
          isSender:false,
        },
        {
          message:"How are you?",
          sender:"Ms. Poonam",
          sentTime:3,
          isSender:true,
        },
      ]
    },
    {
      name:"Mrs. Kavita", 
      messages:[
        {
          message:"Hi", 
          sender:"Mrs. Kavita", 
          sentTime:1, 
          isSender:true
        },
        {
          message:"Hello",
          sender:"Deepak Singh",
          sentTime:2,
          isSender:false,
        },
        {
          message:"How are you?",
          sender:"Mrs. Kavita",
          sentTime:3,
          isSender:true,
        },
      ]
    },
    {
      name:"Ms. Preeti", 
      messages:[
        {
          message:"Hi", 
          sender:"Ms. Preeti", 
          sentTime:1, 
          isSender:true
        },
        {
          message:"Hello",
          sender:"Deepak Singh",
          sentTime:2,
          isSender:false,
        },
        {
          message:"How are you?",
          sender:"Ms. Preeti",
          sentTime:3,
          isSender:true,
        },
      ]
    }
  ])

  
  const [activeUser, setActiveUser] = useState(null);

  const handleUserClick = (username) => {
    setActiveUser(username);
  };

  const insertMessage = (newMessage, contactName) => {
    setAllContacts(prevContacts => {
      return prevContacts.map(contact => {
        if (contact.name === contactName) {
          return {
            ...contact,
            messages: [...contact.messages, newMessage]
          };
        }
        return contact;
      });
    });
  };
  

  const [showChat, setShowChat]=useState(false);

  const toggleChat=()=>{
    setShowChat(!showChat);
  }

  const [showContacts, setShowContacts]=useState(false);

  const toggleShowContacts=()=>{
    setShowContacts(!showContacts)
    handleUserClick(null);
  }

  return (
    <ChatContext.Provider value={{activeUser, handleUserClick, allContacts, setAllContacts, showChat, toggleChat, showContacts, toggleShowContacts, insertMessage}}>
      {children}
    </ChatContext.Provider>
  )
}

export {ChatContextProvider, ChatContext}