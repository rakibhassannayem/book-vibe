import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between my-10">
      <div>
        <h1 className="text-primary text-playfair text-5xl font-bold mb-7 leading-16">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-primary text-workSans">View The List</button>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
