import { useLoaderData, useParams } from "react-router";
import { addToStorage } from "../../utility/addToLS";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === parseInt(id));
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleBook || {};

  const handleMarkAsRead = (id) => {
    addToStorage(id);
    MySwal.fire({
      title: "Marked as Read!",
      text: "Added to Read List!",
      icon: "success",
    });
  };

  const handleWishList = () => {};

  return (
    <div className="flex flex-col md:flex-row justify-between my-6 gap-10 text-workSans text-primary">
      <figure className="md:w-1/2 px-3 bg-base-300 p-10 rounded-xl">
        <img className="" src={image} alt={bookName} />
      </figure>
      <div className="md:w-1/2 px-3">
        <h1 className="text-5xl font-bold text-playfair leading-14 mb-6">
          {bookName}
        </h1>
        <p className="font-medium opacity-80 text-xl">By: {author}</p>
        <div className="divider"></div>
        <p className="font-medium text-2xl opacity-80 text-workSans">
          {category}
        </p>
        <div className="divider"></div>
        <p className="font-bold text-justify">
          Review: <span className="font-medium opacity-70">{review}</span>
        </p>
        <div className="card-actions items-center my-5">
          <span className="font-bold">Tags</span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline bg-green-50 border-0 rounded-full text-[#23be0a] font-semibold text-[16px] text-workSans p-4"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex gap-10">
          <div className="opacity-70 space-y-2">
            <p>Number Of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-semibold space-y-2">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="my-5 space-x-4">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-outline"
          >
            Mark as Read
          </button>
          <button
            onClick={() => handleWishList(id)}
            className="btn bg-secondary"
          >
            Whishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
