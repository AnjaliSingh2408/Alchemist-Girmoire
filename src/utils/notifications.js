export async function requestNotificationPermission() {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") return true;
  const perm = await Notification.requestPermission();
  return perm === "granted";
}

export function sendBrowserNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
}

export function scheduleInBrowserReminder(timestamp, title, body) {
  const delay = timestamp - Date.now();
  if (delay <= 0) return;
  setTimeout(() => sendBrowserNotification(title, body), delay);
}
