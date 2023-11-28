import { Table } from "antd";
import { Book } from "../types";
import generateOutOfFiveFilter from "../utils/generateOutOfFiveFilter";
import KindleUnlimitedIndictor from "./KindUnlimitedIndicator";
import TropeTags from "./TropeTag";
import generateTropeFilters from "../utils/generateTropeFilters";
import { AuthorName, BookTitle } from "./Typography";

interface Props {
  books: Book[];
}

const BookTable: React.FC<Props> = ({ books }) => {
  const tropeFilters = generateTropeFilters(books.map((book) => book.tropes));
  const starFilters = generateOutOfFiveFilter("⭐");
  const spiceFilters = generateOutOfFiveFilter("🌶️");
  const kindleUnlimitedFilter = [{ value: true, text: "Yes!" }];

  return (
    <Table<Book>
      sticky
      dataSource={books}
      pagination={{
        defaultPageSize: 25,
        className: "bg-white pr-2",
      }}
      className="shadow-2xl bg-white"
      rowKey={"title"}
    >
      <Table.Column<Book>
        title="Title"
        dataIndex="title"
        width="30%"
        render={(title) => <BookTitle>{title}</BookTitle>}
      />
      <Table.Column<Book>
        title="Author"
        dataIndex="author"
        width="15%"
        render={(title) => <AuthorName>{title}</AuthorName>}
      />
      <Table.Column<Book>
        title="Plot"
        dataIndex="plot"
        width={108}
        filters={starFilters}
        onFilter={(value, { plot }) => plot === value}
      />
      <Table.Column<Book>
        title="Spice"
        dataIndex="spice"
        filters={spiceFilters}
        onFilter={(value, { spice }) => spice === value}
        width={108}
      />
      <Table.Column<Book>
        title="Tropes And Themes"
        dataIndex="tropes"
        render={(tropes) => <TropeTags tropes={tropes} />}
        filters={tropeFilters}
        onFilter={(value, { tropes }) => tropes.includes(value.toString())}
        filterSearch
        width="20%"
      />
      <Table.Column<Book>
        title="Kindle Unlimited"
        dataIndex="kindleUnlimited"
        render={(kindleUnlimited) => (
          <KindleUnlimitedIndictor kindleUnlimited={kindleUnlimited} />
        )}
        filters={kindleUnlimitedFilter}
        onFilter={(value, { kindleUnlimited }) => kindleUnlimited === value}
        width={126}
      />
      <Table.Column<Book>
        title="Notes"
        dataIndex="notes"
        width="20%"
        render={(note: string) => <p className="font-mono">{note}</p>}
      />
    </Table>
  );
};

export default BookTable;
