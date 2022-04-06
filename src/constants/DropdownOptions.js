import { SECOND, MINUTE, HOUR, DAY, WEEK } from "./TimeOptions";
import {
  TODAY,
  FUTURESTACK,
  THIS_WEEK,
  THIS_MONTH,
  THIS_YEAR,
} from "./DateOptions";

export const DROPDOWN_OPTIONS = {
  timeOptions: {
    defaultValue: DAY,
    options: [SECOND, MINUTE, HOUR, DAY, WEEK],
  },

  dateOptions: {
    defaultValue: FUTURESTACK,
    options: [TODAY, THIS_WEEK, THIS_MONTH, THIS_YEAR],
  },
};
