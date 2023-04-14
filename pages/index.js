import Image from "next/image";
import { LeftQuoteIcon, RightQuoteIcon } from "../assets/icons";
import Achievement from "../components/Achievement";
import Benefit from "../components/Benefit";
import SingleProduct from "../components/SIngleProduct";
import { benefits, products } from "../data/data";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <header className="h-[calc(100vh-101px)] flex items-center justify-center bg-hero bg-cover bg-center">
        <div className="space-y-8 max-w-screen-2xl px-6">
          <h1 className="text-5xl leading-[1.36] text-white font-semibold max-w-xl text-center lg:text-7xl">
            Best furniture to your doorstep
          </h1>
          <button className="btn block mx-auto px-16 py-3 text-lg focus:outline-none rounded-lg">
            Explore
          </button>
        </div>
      </header>

      {/* ACHIEVEMENTS SECTION */}
      <section className="-mt-5 px-6 mb-32">
        <div className="max-w-[62rem] mx-auto gap-5 justify-between md:flex">
          <Achievement title="12+" content="Years of Experience" />
          <Achievement title="85" content="Award Gained" />
          <Achievement title="100+" content="Furniture Sold" />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="mb-32">
        {/* container */}
        <div className="px-6 max-w-screen-2xl mx-auto lg:px-15">
          {/* section container */}
          <div className="flex gap-4 items-center">
            <div className="w-16 border-4 border-primary"></div>
            <h3 className="text-primary ">Why choose us?</h3>
          </div>
          <h2 className="mb-16">Benefits Of Choosing Us</h2>

          {/* benefits */}
          <div className="flex flex-col gap-5 flex-wrap md:flex-row justify-between">
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLING PRODUCTS */}
      <section className="mb-32">
        {/* section container */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-15">
          {/* section title */}
          <div className="flex gap-4 items-center">
            <div className="w-16 border-4 border-primary"></div>
            <h3 className="text-primary ">Best selling</h3>
          </div>
          <h2 className="mb-16">Our Best Selling Product</h2>

          <div className="gap-5 md:grid md:grid-cols-2 justify-items-center lg:grid-cols-4">
            {products
              .filter(({ tag }) => tag === "best selling")
              .map((product, index) => (
                <SingleProduct key={index} {...product} />
              ))}
          </div>
        </div>
      </section>

      {/* CLIENT REVIEW SECTION */}
      <section className="mb-32">
        {/* section container */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-15">
          {/* section title */}
          <div className="flex gap-4 items-center">
            <div className="w-16 border-4 border-primary"></div>
            <h3 className="text-primary ">Clients Review</h3>
          </div>
          <h2 className="mb-16">What Our Clients Say</h2>

          <div className="max-w-6xl mx-auto space-y-4 gap-4 md:flex md:space-y-0 lg:gap-20">
            {/* Client Details */}
            <div className="relative space-y-4 max-w-max rounded-[2rem] basis-[calc(50%-1rem)] flex-none">
              {/* Image */}
              <div className="relative py-8 rounded-[2rem]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-[2rem] h-full w-52 bg-primary"></div>
                <Image
                  src="/images/home/jaybee.png"
                  width={428}
                  height={440}
                  className="relative"
                  alt="Jaybee"
                />
              </div>
              {/* Name */}
              <div className="p-4 border-b-8 border-primary w-max lg:absolute left-full bottom-15">
                Blacmeek Jaybee
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 ">
              <div className="text-7xl leading-[1.4] font-semibold">
                <LeftQuoteIcon />
              </div>

              {/* text */}
              <div className="text-xl text-secondary">
                Shopping for furniture online allows customers to browse and
                purchase items from the comfort of their own home. Shopping for
                furniture online allows customers to browse and purchase items
                from the comfort of their own home. Shopping for furniture
                online allows customers to browse and purchase items from the
                comfort of their own home.
              </div>

              <div className="text-7xl leading-[1.4] font-semibold max-w-max ml-auto">
                <RightQuoteIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section className="mb-32">
        {/* section container */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-15">
          {/* section title */}
          <div className="flex gap-4 items-center">
            <div className="w-16 border-4 border-primary"></div>
            <h3 className="text-primary ">Trending</h3>
          </div>
          <h2 className="mb-16">Our Trending Product</h2>

          <div className="gap-5 justify-items-center md:grid md:grid-cols-2 lg:grid-cols-4">
            {products
              .filter(({ tag }) => tag === "trending")
              .map((product, index) => (
                <SingleProduct key={index} {...product} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
