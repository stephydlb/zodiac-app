export const NotificationService = {
  demanderPermission: async () => {
    if (!("Notification" in window)) return;
    
    return await Notification.requestPermission();
  },

  envoyerNotification: (titre, message) => {
    if (Notification.permission === "granted") {
      new Notification(titre, { body: message });
    }
  }
};
