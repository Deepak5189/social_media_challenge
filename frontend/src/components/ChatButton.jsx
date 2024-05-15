import { useContext } from 'react'
import { FaComment } from 'react-icons/fa'
import { ChatContext } from '../context/ChatContext'
import ContactsInterface from './ContactsInterface';

const ChatButton = () => {
  const {toggleShowContacts, showContacts}=useContext(ChatContext);

  const handleClick=()=>{
    toggleShowContacts();
    console.log(showContacts)
  }

  return (
    <div className="relative">
      <button onClick={handleClick} className='font-bold text-lg'><FaComment fontSize={40} fill='blue'/> Chat</button>
      <div className="absolute bottom-0 right-0" 
            style={{ display:  showContacts ? 'block' : 'none' }}>
        <ContactsInterface/>
      </div>
    </div>
  )
}

export default ChatButton