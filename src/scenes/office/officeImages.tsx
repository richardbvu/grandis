import { LazyLoadImage } from "react-lazy-load-image-component";

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
        />
      </div>
    </div>
  );
};
export default OfficeImages;
