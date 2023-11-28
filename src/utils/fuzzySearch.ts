import Fuse, { IFuseOptions } from "fuse.js";
import { Book } from "../types";

const fuzzySearch = (query: string, books: Book[]) => {
  const options: IFuseOptions<Book> = {
    keys: ["author", "title", "tropes", "notes"],
    threshold: 0.4,
    shouldSort: false,
  };

  const fuse = new Fuse(books, options);

  const result = fuse.search(query);

  return result.map(({ item }) => item);
};

export default fuzzySearch;
