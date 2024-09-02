import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  image: string;
};
const OfficeImages = ({ image }: Props) => {
  return (
    <div>
      <div>
        <LazyLoadImage
          src={`${image}`}
          alt="office-example-image"
          className="aspect-square rounded-sm"
          effect="blur"
        />
      </div>
    </div>
  );
};
export default OfficeImages;
