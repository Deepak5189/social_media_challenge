import { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/ChatContext'

const ChatInterface = () => {
  const {allContacts, activeUser, insertMessage}=useContext(ChatContext);

  const [message, setMessage] = useState('');
  const [scrollToBottom, setScrollToBottom] = useState(false);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = (event, userName) => {
    event.preventDefault()
    if (message.trim() !== '') {
      const newMessage={
        message,
        sender:"Deepak Singh",
        sentTime: Date.now(),
        isSender: false,
      }
      insertMessage(newMessage, userName);
      console.log(newMessage);
      setMessage('');
      setScrollToBottom(true);
      console.log(allContacts);
    }
  };

  
  useEffect(() => {
    if (scrollToBottom) {
      const chatMessages = document.getElementById('chatMessages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
        setScrollToBottom(false);
      }
    }
  }, [allContacts, scrollToBottom]);


  return (
    <div className="w-full bg-white border-gray-300 border-[1px] rounded-lg">
      
      <div className={`${!activeUser?'none':'bg-white p-5 rounded-lg shadow-lg'}`}>
        {!activeUser?<div className='none'></div>: allContacts.map((user, index) => (
          <div
            key={index}
            className="mb-3 p- rounded-md bg-[#f2f2f2] last-of-type:mb-0"
            style={{ display: activeUser === user.name ? 'block' : 'none' }}
          >
            <div className="flex items-center gap-5 bg-white pb-2">
              {/* <img src={user.profilePic} alt="img" className='w-10 h-10 rounded-full object-cover'/> */}
              <div className="font-semibold text-xl">
                {user.name}
              </div>
            </div>
            <div className="w-full bg-white border-[1px] border-[#ddd] rounded-md">
              <div id='chatMessages' className={`max-h-[20rem] overflow-y-scroll p-3`}>
                {user.messages.map((msg, index) => (
                  <div key={index} className={`break-words max-w-[350px] w-auto box-border px-2 py-1 my-1 rounded-[5px] ${
                    msg.isSender ? 'bg-gray-300/70 text-left' : 'bg-blue-500 text-white text-right'
                  }`}>
                    {msg.message}
                  </div>
                ))}
              </div>
              <form onSubmit={(event)=>handleSendClick(event, user.name)} className="flex items-center p-3">
                <input className='flex-1 px-2 py-1 border-gray-300 rounded-md focus:outline-none border-[1px] mr-2'
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={handleInputChange}
                />
                <button className="bg-blue-500 text-white border-none h-8 px-5 py-1 rounded-md cursor-pointer">
                  Send
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatInterface