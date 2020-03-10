export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

interface ShowNotificationAction {
  type: typeof SHOW_NOTIFICATION
  message: string
  error: boolean
}

interface HideNotificationAction {
  type: typeof HIDE_NOTIFICATION
}

export type NotificationActions =
  | ShowNotificationAction
  | HideNotificationAction

const showNotification = (error: boolean) => (
  message: string
): ShowNotificationAction => ({
  type: SHOW_NOTIFICATION,
  message,
  error,
})

export const showErrorNotification = showNotification(true)

export const showSuccessNotification = showNotification(false)

export const hideNotification = (): HideNotificationAction => ({
  type: HIDE_NOTIFICATION,
})
