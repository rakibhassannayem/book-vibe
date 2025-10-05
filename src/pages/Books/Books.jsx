import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div>
      <Suspense fallback={<span>loading...</span>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          {data.map((singleBook) => (
            <Book singleBook={singleBook} key={singleBook.bookId}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
