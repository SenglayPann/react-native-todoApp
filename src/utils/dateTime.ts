import moment from 'moment';

const FORMAT = 'DD-MM-YYYY HH:mm';

export const dateTimeToString = (dt: Date): string => {
  return moment(dt).format(FORMAT);
};

export const strDateTimeToDateTime = (strDt: string): Date => {
  return moment(strDt, FORMAT).toDate();
};

