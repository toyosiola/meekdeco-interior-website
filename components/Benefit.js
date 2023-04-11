function Benefit({ title, content }) {
  return (
    <div className="mx-auto px-6 py-14  flex flex-col gap-4 border border-tertiary rounded-3xl md:basis-[calc(50%-1rem)] lg:basis-[calc(25%-1rem)]">
      <h4 className="text-center">{title}</h4>
      <p className="max-w-[16.5rem] mx-auto text-black text-lg leading-[1.8] text-center">
        {content}
      </p>
    </div>
  );
}

export default Benefit;
