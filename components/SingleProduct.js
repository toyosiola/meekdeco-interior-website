import Image from "next/image";

function SingleProduct({ name, maker, price, link }) {
  return (
    // Single product
    <div className="max-w-max mx-auto mb-5 space-y-3 p-4 border border-tertiary rounded-2xl md:mb-0 hover:shadow-2xl hover:-translate-y-1 duration-500">
      {/* image container */}
      <div className="max-w-max mx-auto">
        <Image src={link} width={281} height={275} alt={name} />
      </div>
      {/* product details */}
      <div className="flex flex-col gap-2 text-center font-semibold">
        <p className="text-sm">{maker}</p>
        <p className="text-lg">{name}</p>
        <p className="text-2xl text-primary">{price}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
