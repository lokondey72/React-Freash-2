import SellerComp from "./SellerComp";

const SellerS = () => {
  return (
    <footer className="pt-9 pb-28 bg-[#CFA485] z-10">
      <div className="container">
        <div className="flex sm:flex-col xl:flex-row gap-8 justify-between">
          <div className="w-[460px] sm:mx-auto xl:m-0 sm:text-center lg:text-start">
            <h2 className="text-6xl font-extrabold text-[#FFFFFF] pb-11">
              Best Seller Product
            </h2>
            <p className="text-2xl font-bold text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
              velit tortor quam at donec etiam bibendum sagittis. Libero tempor,
              lacus amet, scelerisque neque mauris odio risus nec. Nisl,
              parturient at morbi morbi sit arcu. At integer maecenas tortor non
              lectus.
            </p>
            <div className="mt-10">
              <button className="bg-black text-[#FFFFFF] py-6 px-20 rounded-xl mt-10 hover:bg-[#FDBB57] hover:text-black text-2xl font-bold">
                Learn MORE
              </button>
            </div>
          </div>
          <div className="flex sm:flex-col md:flex-row lg:flex-row sm:gap-10 md:gap-0 lg:gap-9 pt-6">
            <SellerComp imgUrl="/footer-img-(1).png" productName="Sweater Shirt" regularPrice="$45.99" discountedPrice="$35.99"/>
            <SellerComp imgUrl="/footer-img-(2).png" productName="Pants fashion" regularPrice="$55" discountedPrice="$44.99"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SellerS;
