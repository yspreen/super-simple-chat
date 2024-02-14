export const timeSince = (date: Date) => {
  var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " y";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " mo";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " d";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " h";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " m";
  }
  return "just now";
};

export const formatDay = (date: Date) => {
  const formatter = new Intl.DateTimeFormat(navigator.language, {
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  return formatter.format(date);
};
