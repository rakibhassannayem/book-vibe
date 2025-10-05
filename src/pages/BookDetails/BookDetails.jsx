import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === parseInt(id));
  const { bookName, image, review } = singleBook;
  return (
    <div className="flex flex-col gap-5 items-center p-10">
      <img className="w-50" src={image} alt="" />
      <p className="text-xl font-bold text-primary text-workSans">{bookName}</p>
      <p className="text-primary text-workSans">{review}</p>
    </div>
  );
};

export default BookDetails;
