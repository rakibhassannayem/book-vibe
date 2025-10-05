import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToLS";
import Book from "../Book/Book";
import { ChevronDown } from "lucide-react";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedBookStr = getStoredBook();
    const storedBook = storedBookStr.map((id) => parseInt(id));
    const readList = data.filter((book) => storedBook.includes(book.bookId));
    setReadList(readList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByPage = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByPage);
    }
    if (type === "year") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadList(sortedByPage);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <details className="dropdown">
          <summary className="btn m-1 bg-primary text-wrokSans text-lg rounded-lg">
            Sort By {sort ? sort : ""}
            <ChevronDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("ratings")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("year")}>Publishing Year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read ({readList.length})</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
            {readList.map((singleBook) => (
              <Book key={singleBook.bookId} singleBook={singleBook}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My wishlist </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
