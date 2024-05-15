import { useContext, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import { FaEllipsisV } from 'react-icons/fa';
import ChatInterface from './ChatInterface';

const ContactsInterface = () => {
  const {toggleShowContacts, allContacts, activeUser, handleUserClick}=useContext(ChatContext);
  const [searchTerm, setSearchTerm] = useState('');
  let filteredContacts=allContacts;

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    // <div className="container">
      <div className="relative overflow-y-scroll p-5 rounded-lg shadow-lg bg-white border-gray-300 border-[1px] min-w-[300px]">
        <div className="flex justify-between items-center mb-2 -mt-1">
        <h2 className='text-xl font-semibold'>Contacts</h2>
        <button className='text-xl font-semibold' onClick={toggleShowContacts}>X</button>
        </div>
        <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-1 px-2 py-1 border-gray-300 rounded-xl focus:outline-none border-[1px] w-full"
      />
        {filteredContacts.map((user, index) => (
          <div
            key={index}
            className={`mb-2 cursor-pointer p-2 rounded-md hover:bg-[#f2f2f2] ${activeUser === user.name ? 'bg-[#f2f2f2' : ''} flex items-center gap-3`}
            onClick={() => handleUserClick(user.name)}
          >
            <div>
              {/* <img src={user.profilePic} alt="img" className='w-10 h-10 rounded-full object-cover'/> */}
            </div>
            <div className="font-semibold">
              {user.name}
            </div>
            <div className='flex-1 flex justify-end'><FaEllipsisV/></div>
          </div>
        ))}
      {/* </div> */}
      <div className={`fixed right-[342px] bottom-10 w-[350px]`}>
        <ChatInterface/>
      </div>
    </div>
  )
}

export default ContactsInterface