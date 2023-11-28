import { Typography } from "antd";
import { Book } from "../types";

const { Text } = Typography;

type Props = Pick<Book, "kindleUnlimited">;

const KindleUnlimitedIndictor: React.FC<Props> = ({ kindleUnlimited }) => {
  if (kindleUnlimited) {
    return <Text type="success">Yes!</Text>;
  }
  return <Text type="danger">No</Text>;
};

export default KindleUnlimitedIndictor;
