import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToLS";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const storedBookStr = getStoredBook();
    const storedBook = storedBookStr.map((id) => parseInt(id));
    const readList = data.filter((book) => storedBook.includes(book.bookId));
    setReadList(readList);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Book i read ({readList.length})</h2>
          {readList.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My wishlist </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
