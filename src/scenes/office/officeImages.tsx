type Props = {
  image: string;
};
const OfficeImages = ({ image }: Props) => {
  return (
    <div>
      <div>
        <img
          src={`${image}`}
          alt="office-example-image"
          //   className="h-[350px] w-[500px] rounded-sm"
          className="aspect-square rounded-sm"
        />
      </div>
    </div>
  );
};
export default OfficeImages;
