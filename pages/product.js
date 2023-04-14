import { products } from "../data/data";
import SingleProduct from "../components/SIngleProduct";
import { ChevronLeftIcon, ChevronRightIcon } from "../assets/icons";

function Product() {
  return (
    <>
      {/* PRODUCTS SECTION */}
      <section className="mb-16">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-15">
          <div className="mb-8 items-center justify-between md:flex">
            <h1 className="mb-4 text-3xl md:mb-0 lg:text-5xl lg:leading-[1.36]">
              Trending Product
            </h1>
            <form className="w-max ml-auto text-[#9C9C9C] md:ml-0">
              <select className="w-48 p-4 border border-[#9C9C9C] rounded-md">
                <option value="">Sort by</option>
              </select>
            </form>
          </div>

          {/* PRODUCTS CONTAINER */}
          <div className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {/* duplicate the best selling products using Array.from() */}
            {Array.from({ length: 2 }, () =>
              products
                .filter(({ tag }) => tag === "best selling")
                .map((product, index) => (
                  <SingleProduct key={index} {...product} />
                ))
            )}
          </div>
        </div>
      </section>

      {/* PREV / NEXT SECTION */}
      <section className="mb-20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-15">
          <div className="flex gap-4 justify-between items-center">
            <button className="text-sm px-4 py-2 flex items-center gap-2 text-[#B5B5B5] border border-[#B5B5B5] rounded-lg duration-500 hover:border-transparent hover:text-secondary hover:bg-fade xs:text-base xs:px-6 xs:py-4">
              <ChevronLeftIcon /> Previous
            </button>
            <button className="text-sm gap-6 items-center xs:text-base sm:flex">
              <span className="border-[#B5B5B5] rounded-md sm:border sm:px-4 sm:py-2">
                1{" "}
              </span>
              of<span> 100</span>
            </button>
            <button className="btn text-sm px-4 py-2 flex items-center gap-2 rounded-lg duration-500 xs:text-base xs:px-6 xs:py-4">
              Next <ChevronRightIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
