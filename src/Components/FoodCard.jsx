export default function FoodCard({ foodData }) {
  return (
    <a
      href={foodData?.action?.link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="w-40 h-[200px] object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
        alt={foodData?.accessibility?.altText || "Food"}
      />
    </a>
  );
}