export const getDateFormatted = (
  val,
  short = false,
  excludeDay = false,
  excludeYear = false
) => {
  if (!val) return "";
  const date = new Date(val);
  if (Date.now() - 2000 < date.getTime()) return "Present";

  var day = date.toLocaleString("en-us", { day: "numeric" });
  var month = date.toLocaleString("en-us", {
    month: short ? "short" : "long",
  });
  var year = date.toLocaleString("en-us", { year: "numeric" });

  if (excludeDay) return `${month} ${year}`;
  if (excludeYear) return `${day} ${month}`;

  return `${day} ${month}, ${year}`;
};
