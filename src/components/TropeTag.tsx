import { Tag } from "antd";
import hashString from "../utils/hashString";
import { Book } from "../types";

type Props = Pick<Book, "tropes">;

const TropeTag: React.FC<{ trope: string }> = ({ trope }) => {
  const TAG_COLORS = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
  ] as const;
  const color = TAG_COLORS[hashString(trope)];
  return <Tag color={color}>{trope}</Tag>;
};

const TropeTags: React.FC<Props> = ({ tropes }) => {
  return (
    <div className="flex flex-wrap gap-y-2">
      {tropes
        .filter((trope) => trope.trim() !== "") // Due to the way we parse the CSV empty tropes get represented as ""
        .map((trope) => (
          <TropeTag trope={trope} key={trope} />
        ))}
    </div>
  );
};
export default TropeTags;
