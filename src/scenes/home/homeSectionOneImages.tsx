type Props = {
  img: string;
};
const HomeSectionOneImages = ({ img }: Props) => {
  return (
    <div>
      <div>
        <img
          className="mx-auto aspect-auto h-auto rounded"
          src={img}
          alt="restaurants-grandis"
        />
      </div>
    </div>
  );
};
export default HomeSectionOneImages;
