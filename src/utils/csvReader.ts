import { Book } from "../types";
import books from "./books.csv";

const readBooks = (): Book[] => {
  let currentAuthor = "";

  return books.map((element: Record<string, string>) => {
    if (element.Author !== "") {
      currentAuthor = element.Author;
    }

    return {
      author: element.Author !== "" ? element.Author : currentAuthor,
      title: element.Titles,
      plot: element.Plot,
      spice: element.Spice,
      tropes: element["Tropes & Themes"].split(", "),
      kindleUnlimited:
        element["Kindle Unlimited"].toLocaleLowerCase() === "true",
      notes: element.Notes,
    };
  });
};

export default readBooks;
