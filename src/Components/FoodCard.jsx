export default function FoodCard({ foodData }) {
  return (
    <a
      href={foodData?.action?.link}
      target="_blank"
      rel="noreferrer"
      className="block flex-shrink-0 transition-transform active:scale-95"
    >
      <img
        className="w-28 h-36 sm:w-36 sm:h-44 md:w-40 md:h-[200px] object-cover rounded-xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
        alt={foodData?.accessibility?.altText || "Food"}
      />
    </a>
  );
}