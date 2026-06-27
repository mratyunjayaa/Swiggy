export default function FoodCard({ foodData }) {
  return (
    <a
      href={foodData?.action?.link}
      target="_blank"
      rel="noreferrer"
      className="block transition-transform duration-200 hover:scale-95 active:scale-95"
    >
      <img
        // w-auto and object-contain keep the natural round shape intact across devices
        className="w-24 h-auto xs:w-32 sm:w-36 md:w-40 object-contain rounded-xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
        alt={foodData?.accessibility?.altText || "Food"}
      />
    </a>
  );
}