
export const calculateTimeLeft = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const currentTime = new Date();

  let status = "";
  let timeLeft = { days: 0, hours: 0, minutes: 0 };

  if (currentTime < startDate) {
    status = "Upcoming";
    timeLeft = getTimeLeft(startDate);
  } else if (currentTime >= startDate && currentTime < endDate) {
    status = "Active";
    timeLeft = getTimeLeft(endDate);
  } else {
    status = "Ended";
  }

  return { status, timeLeft };
};

const getTimeLeft = (targetDate) => {
  const diff = targetDate - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { days, hours, minutes };
};
