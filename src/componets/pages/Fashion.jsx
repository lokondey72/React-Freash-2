const About = () => {
  return (
    <>
      <section className=" pt-52 pb-[300px]">
        <div className="container relative z-0">
          <div className="flex sm:flex-col xl:flex-row gap-32">
            <div className="rounded-tl-[150px] sm:w-[500px] lg:w-[660px] sm:m-auto xl:m-0 overflow-hidden">
              <img
                className="w-full "
                src="/fashion-main-img.png"
                alt="fashion-main-img.png"
              />
              <div className="absolute sm:-top-[60px] sm:left-[470px] lg:left-[735px] md:left-[530px] xl:left-[570px] -z-10">
                <img src="/fashion-shep-1.png" alt="fashion-shap.png" />
              </div>
              <div className="absolute sm:bottom-[42%] lg:bottom-[36%] xl:-bottom-[45%] sm:left-0 md:left-[60px] lg:left-[110px] xl:left-[150px] -z-10">
                <img src="/fashion-shep-2.png" alt="fashion-shap.png" />
              </div>
            </div>
            <div className="md:text-center sm:text-center xl:text-start sm:ml-28 md:ml-44 lg:ml-72 xl:m-0">
              <h2 className="w-[430px] text-6xl font-bold py-16 text-black">
                Best Fashion Since 2010
              </h2>
              <p className="w-[440px] text-xl font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
                odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
                elementum non viverra.
              </p>
            </div>
          </div>
          <div>
            <div className="xl:p-16 md:p-10 md:ml-14 sm:p-8 bg-[#FEECC8] rounded-[20px] flex sm:gap-5 md:gap-10 xl:gap-14 absolute sm:top-[104%] xl:top-[93%] sm:left-0 md:-left-[6%] lg:left-[10%] xl:left-[27%] -z-10">
              <div className="w-[140px]">
                <p className="text-6xl font-bold pb-6">2010</p>
                <h3 className="text-2xl font-medium text-center">Founded</h3>
              </div>
              <div className="w-[2px] bg-black"></div>
              <div className="w-[182px]">
                <p className="text-6xl font-bold pb-6">5000+</p>
                <h3 className="text-2xl font-medium text-center">
                  Product Sold
                </h3>
              </div>
              <div className="w-[2px] bg-black"></div>
              <div className="w-[185px]">
                <p className="text-6xl font-bold pb-6">4500+</p>
                <h3 className="text-2xl font-medium text-center">
                  Best Reviews
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
