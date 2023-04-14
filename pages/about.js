import Image from "next/image";
import { benefits } from "../data/data";

function SingleBenefit({ number, title, content }) {
  return (
    <div className="max-w-lg md:max-w-none flex gap-2 items-start flex-none md:basis-[calc(50%-1.5rem)]">
      {/* item number */}
      <p className="bg-primary py-1 px-4 text-white text-2xl">{number}</p>
      {/* item content */}
      <div className="space-y-4">
        <h4>{title}</h4>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      {/* WHAT WE DO */}
      <section className="mb-24">
        {/* section container */}
        <div className="max-w-screen-2xl mx-auto px-6 gap-16 justify-between space-y-6 md:space-y-0 md:flex lg:px-15 lg:gap-36">
          {/* content */}
          <div className="space-y-3 flex-none self-center basis-[calc(50%-2rem)] lg:basis-[calc(50%-4rem)]">
            <h1 className="text-4xl text-secondary font-semibold text-center md:text-left lg:text-6xl leading-[1.4]">
              What <span className="text-primary">we do</span>
            </h1>
            <p className="text-secondary lg:text-lg">
              We offer a wide selection of unique and beautifully crafted
              furniture for every room in your home. Our team of designers and
              craftsmen are dedicated to creating stylish and long-lasting
              pieces using high-quality materials and ethical sourcing. We pride
              ourselves on our commitment to customer service and
              sustainability.
            </p>
          </div>
          {/* couch image */}
          <div className="">
            <Image
              src="/images/about/couch.png"
              width={648}
              height={470}
              alt="green couch"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mb-24">
        {/* section container */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-15 ">
          <div className=" justify-between items-center lg:flex lg:gap-16">
            {/* image container */}
            <div className="hidden relative lg:flex justify-end flex-none basis-[calc(50%-2rem)]">
              <div className="w-2/3">
                <Image
                  src="/images/about/brown-couch.png"
                  width={427}
                  height={644}
                  alt="brown couch"
                />
              </div>
              <div className="absolute w-2/5 left-0 top-20">
                <Image
                  src="/images/about/work-desk.png"
                  width={260}
                  height={248}
                  alt="work desk"
                />
              </div>
            </div>

            {/* content */}
            <div className="space-y-14">
              {/* title */}
              <div className="space-y-3">
                <h1 className="text-4xl text-secondary font-semibold text-center md:text-left lg:text-6xl leading-[1.4]">
                  Why <span className="text-primary">choose us?</span>
                </h1>
                <p className="text-lg">
                  We offer customers a convenient and cost-effective way to find
                  and purchase the furniture they need
                </p>
              </div>
              {/* items */}
              <div className="flex flex-col gap-y-12 gap-x-6 justify-between flex-wrap md:flex-row">
                {benefits.map((benefit, index) => (
                  <SingleBenefit key={index} {...benefit} number={index + 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMER SALES */}
      <section className="mb-24">
        {/* section container */}
        <div className="max-w-screen-2xl mx-auto px-6 gap-4 md:flex lg:px-15">
          <div className="mb-4 px-10 py-32 flex-none basis-[calc(50%-1rem)] flex items-center justify-center rounded-2xl bg-summerSales_1 bg-cover bg-center lg:px-24 md:mb-0 lg:justify-end">
            <div className="text-center">
              <h3>Summer sales</h3>
              <p className="text-lg text-secondary text-semibold mb-2">
                Get discount here
              </p>
              <button className="btn rounded-8 px-8 py-3 text-lg rounded-lg focus:outline-none lg:px-16">
                View all
              </button>
            </div>
          </div>

          <div className="mb-4 px-10 py-32 flex-none basis-[calc(50%-1rem)] flex items-center justify-center rounded-2xl bg-summerSales_2 bg-cover bg-center lg:px-24 md:mb-0 lg:justify-start">
            <div className="text-center">
              <h3>Summer sales</h3>
              <p className="text-lg text-secondary text-semibold mb-2">
                Get discount here
              </p>
              <button className="btn rounded-8 px-8 py-3 text-lg rounded-lg focus:outline-none lg:px-16">
                View all
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
