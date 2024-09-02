import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
          effect="blur"
        />
      </div>
    </section>
  );
};
export default HomeSectionOneImages;
