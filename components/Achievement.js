function Achievement({ title, content }) {
  return (
    <div className="py-5 px-6 mb-5 max-w-xs mx-auto border border-tertiary rounded-2xl text-center bg-white font-semibold md:basis-[calc(33.333%-1rem)] md:mb-0">
      <h2 className="text-primary text-6xl leading-[1.3]">{title}</h2>
      <h4 className="max-w-[8rem] mx-auto">{content}</h4>
    </div>
  );
}

export default Achievement;
