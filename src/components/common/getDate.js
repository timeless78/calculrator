export default () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const weekList = new Array(
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat."
  );
  const week = weekList[now.getDay()];
  const time = now.getTime();
  const hour = now.getHours();
  let daytime = "night";

  if (hour < 12) {
    daytime = "morning";
  } else if (hour < 18) {
    daytime = "afternoon";
  } else if (hour < 23) {
    daytime = "evening";
  }

  const dateInfo = {
    month,
    date,
    week,
    time,
    daytime,
  };
  return dateInfo;
};
