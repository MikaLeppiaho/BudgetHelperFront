import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const style = {
    padding: 10,
    margin: '1em auto',
    width: '70%',
    textAlign: 'center',
    backgroundColor: 'lightgreen',
    borderRadius: '5px'
  }
  return (
    <div>
      {notification.length > 0 ? (
        <div style={style}>{notification}</div>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default Notification
