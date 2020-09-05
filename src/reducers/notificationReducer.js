const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return (state = action.notification)
    default:
      return state
  }
}
//Action creator. Call function setNotification with the notification message and time. Action creator updates the notification state and after set seconds
//the state is cleared
export const setNotification = (content, time) => {
  console.log('Content:', content)
  console.log('Time:', time)
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification: content
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: ''
      })
    }, time * 1000)
  }
}

export default notificationReducer
