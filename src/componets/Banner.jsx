const Banner = () => {
  return (
    <>
      <section className="pb-20 pt-44 bg-[#FAE3B6] rounded-e-lg">
        <div className="container flex justify-between sm:flex-col lg:flex-row">
          <div>
            <h1 className="w-full lg:w-[550px] text-7xl font-semibold">
              Find The Best Fashion Style For You
            </h1>
            <p className="w-full lg:w-[430px] py-11 text-xl font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
              odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
              elementum non viverra.
            </p>
            <div className="pt-14 pb-5">
              <button className="bg-black text-slate-50 py-6 px-20 rounded-xl mt-10 hover:bg-[#FDBB57] hover:text-black text-2xl font-bold">
                SHOP NOW
              </button>
            </div>
          </div>
          <div>
            <img src="/banner-img.png" alt="banner-img.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
