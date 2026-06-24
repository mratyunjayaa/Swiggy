export default function DineCard({ RestData }) {
  const info = RestData?.info;

  return (
    <a
      href={RestData?.cta?.link}
      target="_blank"
      rel="noreferrer"
      className="block min-w-[340px] flex-shrink-0 rounded-3xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-5 hover:-translate-y-0.5 hover:shadow-xs"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-2xl group">
        <img
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.mediaFiles?.[0]?.url}`}
          alt={info?.name}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Restaurant Name */}
        <div className="absolute bottom-3 left-3 right-3">
          <h2 className="text-xl font-bold text-white truncate">
            {info?.name}
          </h2>
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur-md">
          ⭐ {info?.rating?.value}
        </div>
      </div>

      {/* Details */}
      <div className="mt-4">
        <div className="flex justify-between gap-3 text-sm text-gray-600">
          <p className="truncate">
            {info?.cuisines?.join(" • ")}
          </p>

          <p className="font-medium whitespace-nowrap">
            {info?.costForTwo}
          </p>
        </div>

        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <p className="truncate">
            {info?.locality}, {info?.locationInfo?.city?.name}
          </p>

          <p className="whitespace-nowrap">
            {info?.locationInfo?.distanceString}
          </p>
        </div>

        {/* Offer Box */}
        <div className="mt-4 rounded-xl bg-emerald-500 p-3 text-white">
          <div className="flex justify-between">
            <p className="font-bold truncate">
              🎉 {info?.offerInfoV3?.vendorOffer?.title}
            </p>

            <p className="font-semibold whitespace-nowrap">
              {info?.offerInfoV3?.vendorOffer?.subtext}
            </p>
          </div>

          <p className="text-sm">
            {info?.offerInfoV3?.vendorOffer?.subtitle}
          </p>
        </div>

        {/* Bank Offer */}
        <div className="mt-3 rounded-xl bg-emerald-100 p-3 font-semibold text-emerald-700">
          {info?.customerOffer?.info?.description ||
            "Up to 10% off with bank offers"}
        </div>

        {/* Coupon */}
        <p className="mt-3 text-sm font-medium text-indigo-700">
          {info?.vendorOffer?.infos?.[0]?.header ||
            "Get extra offers on booking"}
        </p>
      </div>
    </a>
  );
}