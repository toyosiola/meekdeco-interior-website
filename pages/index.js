import Achievement from "../components/Achievement";
import Benefit from "../components/Benefit";
import { benefits } from "../data/data";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <header className="h-[calc(100vh-101px)] flex items-center justify-center bg-hero bg-cover bg-center">
        <div className="space-y-8 max-w-screen-2xl px-6">
          <h1 className="text-5xl leading-[1.36] text-white font-semibold max-w-xl text-center lg:text-7xl">
            Best furniture to your doorstep
          </h1>
          <button className="block mx-auto bg-primary text-white px-16 py-3 text-lg focus:outline-none rounded-lg hover:bg-fade hover:text-secondary">
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
        <div className="px-6 max-w-screen-2xl mx-auto lg:px-15">
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
    </>
  );
}

export default Home;
