import { Link } from "react-router";
import { Star } from "lucide-react";
const Book = ({ singleBook }) => {
  const { image, tags, bookName, author, category, rating, bookId } =
    singleBook;
  return (
    <Link to={`./BookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-md border-1 border-base-300 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-green-100">
        <figure className="bg-base-200 p-5 m-5 mb-0 rounded-xl">
          <img className="h-50 shadow-xl" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="card-actions">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="badge badge-outline bg-green-50 border-0 rounded-full text-[#23be0a] font-medium text-[16px] text-workSans p-4"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="font-medium text-primary opacity-80 text-workSans">
            By: {author}
          </p>
          <div className="card-actions justify-between border-t-1 border-dashed font-medium text-[16px] text-primary opacity-80 text-workSans pt-3">
            <p>{category}</p>
            <div className="flex items-center gap-1">
              <span>{rating}</span>
              <Star size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
