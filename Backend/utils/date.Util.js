import dayjs from "dayjs";

const YYYYMMDD = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

const YYYYMMDDHHMMSS = (date) => {
  return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
};

const YYYYMMDDTHHMMSSSSSZ = (date) => {
  return dayjs(date).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
};

export default dateFormat = {
  YYYYMMDD,
  YYYYMMDDHHMMSS,
  YYYYMMDDTHHMMSSSSSZ,
};
