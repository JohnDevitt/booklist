import { times, repeat } from "lodash";

const generateOutOfFiveFilter = (symbol: string) => {
  return times(5, (index) => ({
    value: repeat(symbol, index + 1),
    text: repeat(symbol, index + 1),
  }));
};

export default generateOutOfFiveFilter;
