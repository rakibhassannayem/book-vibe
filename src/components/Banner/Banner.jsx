import bannerImg from "../../assets/bannerImg.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 my-6 rounded-2xl py-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold text-primary text-playfair leading-14 mb-6">
            Books to freshen up
            <br /> your bookshelf
          </h1>
          <button className="btn bg-primary text-workSans">
            View The List
          </button>
        </div>
      </div>
    </div>
    // <div className="flex flex-col-reverse md:flex-row items-center justify-between my-10">
    //   <div>
    //     <h1 className="">

    //     </h1>

    //   </div>
    //   <div>
    //     <img src={bannerImg} alt="" />
    //   </div>
    // </div>
  );
};

export default Banner;
