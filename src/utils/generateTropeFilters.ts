import { uniq, flatten, countBy, sortBy } from "lodash";

const generateTropeFilters = (tropes: string[][]) => {
  const tropeSet = uniq(flatten(tropes)).filter((trope) => trope !== "");
  const frequencyMap = countBy(tropeSet);
  const orderedTropeSet = sortBy(tropeSet, (trope) => frequencyMap[trope]);
  const tropeFilters = orderedTropeSet.map((trope) => ({
    text: trope,
    value: trope,
  }));

  return tropeFilters;
};

export default generateTropeFilters;
