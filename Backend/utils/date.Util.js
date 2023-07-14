import dayjs from "dayjs";

const DDMMYYYY = (date) => {
  return dayjs(date).format("DD/MM/YYYY");
};

const DDMMYYYYHHMMSS = (date) => {
  return dayjs(date).format("DD/MM/YYYY HH:mm:ss");
};

export default dateFormat = {
  DDMMYYYY,
  DDMMYYYYHHMMSS,
};
