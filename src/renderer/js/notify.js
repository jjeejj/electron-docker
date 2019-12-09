import { NOTIFICATION_TITLE } from './constants/ElectronConstants'

function notify (body) {
  /* eslint-disable no-new */
  new Notification(NOTIFICATION_TITLE, {
    body
  })
}

export default notify
