// import React from 'react'

const notifications=[
  "notification 1",
  "notification 2",
  "notification 3",
  "notification 4",
]

const Notifications = () => {
  return (
    <div className=''>
      <div className="bg-white p-2 shadow-lg rounded-lg border-gray-300 border-[1px]">
        <h2 className="text-lg font-semibold">Notifications</h2>
        {notifications.map((notification, index)=>
          <div className="" key={index}>{notification}</div>
        )}
      </div>
    </div>
  )
}

export default Notifications