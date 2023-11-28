import React, { ChangeEvent, useState } from "react";
import { Flex } from "antd";
import readBooks from "./utils/csvReader";
import BookTable from "./components/BookTable";
import { PageTitle } from "./components/Typography";
import Search from "antd/es/input/Search";
import fuzzySearch from "./utils/fuzzySearch";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const onSetSearch = (searchEvent: ChangeEvent<HTMLInputElement>) => {
    setSearch(searchEvent.target.value);
  };

  const books = readBooks();

  const filteredBooks =
    search.trim() === "" ? books : fuzzySearch(search, books);

  return (
    <Flex justify="center" className="min-h-screen py-12 bg-gray-100 min-w-fit">
      <Flex vertical className="px-4 max-w-screen-xl">
        <Flex justify="space-between" align="center">
          <PageTitle>{"Demi's Book Database"}</PageTitle>
          <Search
            placeholder="Title, Author, etc..."
            value={search}
            allowClear
            onChange={onSetSearch}
            className="w-96"
            size="large"
            enterButton
          />
        </Flex>
        <BookTable books={filteredBooks} />
      </Flex>
    </Flex>
  );
};

export default App;
