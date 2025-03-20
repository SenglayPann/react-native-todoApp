import moment from 'moment';

const formatStr = 'DD-MM-YYYY HH:mm';

export const dateTimeToString = (dt: Date): string => {
  return moment(dt).format(formatStr);
};

export const strDateTimeToDateTime = (strDt: string): Date => {
  return moment(strDt, formatStr).toDate();
};

