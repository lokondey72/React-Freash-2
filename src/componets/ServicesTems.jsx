const ServicesTems = ({ imgUrl, prodactTxt }) => {
  return (
    <>
      <div className="relative rounded-2xl overflow-hidden cursor-pointer w-1/3 hover:shadow-3xl">
        <img className="w-full" src={imgUrl} alt="collection-img-(1).png" />
        <button className="absolute sm:bottom-6 sm:left-[14px] xl:bottom-[40px] lg:left-[36px] xl:left-[35px] text-black sm:h-[40px] lg:h-[50px] sm:w-[165px] md:w-[205px] lg:w-[255px] xl:w-[300px] 2xl:w-[368px] bg-[#FFFFFF] rounded-3xl cursor-pointer hover:bg-[#FDBB57] text-2xl font-normal leading-6">
          {prodactTxt}
        </button>
      </div>
    </>
  );
};

export default ServicesTems;
