type Props = {
  img: string;
};
const HomeSectionOneImages = ({ img }: Props) => {
  return (
    <section>
      <div>
        <img
          className="mx-auto aspect-auto h-auto rounded"
          src={img}
          alt="restaurants-grandis"
        />
      </div>
    </section>
  );
};
export default HomeSectionOneImages;
