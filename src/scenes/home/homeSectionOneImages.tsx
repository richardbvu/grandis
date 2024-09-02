import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  img: string;
};
const HomeSectionOneImages = ({ img }: Props) => {
  return (
    <section>
      <div>
        <LazyLoadImage
          className="mx-auto aspect-auto h-auto rounded"
          src={img}
          alt="restaurants-grandis"
        />
      </div>
    </section>
  );
};
export default HomeSectionOneImages;
