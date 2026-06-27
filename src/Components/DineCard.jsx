export default function DineCard({ RestData }) {
  const info = RestData?.info;

  return (
    <a
      href={RestData?.cta?.link}
      target="_blank"
      rel="noreferrer"
      className="block w-[280px] md:w-[340px] flex-shrink-0 rounded-2xl md:rounded-3xl border border-gray-100 bg-white p-2.5 md:p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl group">
        <img
          className="h-44 md:h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.mediaFiles?.[0]?.url}`}
          alt={info?.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-2.5 left-2.5 right-2.5 md:bottom-3 md:left-3 md:right-3">
          <h2 className="text-lg md:text-xl font-bold text-white truncate">
            {info?.name}
          </h2>
        </div>

        <div className="absolute top-2.5 right-2.5 md:top-3 md:right-3 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-semibold text-white backdrop-blur-md">
          ⭐ {info?.rating?.value}
        </div>
      </div>

      <div className="mt-3 md:mt-4 px-1">
        <div className="flex justify-between gap-2 text-xs md:text-sm text-gray-600">
          <p className="truncate flex-1">
            {info?.cuisines?.join(" • ")}
          </p>
          <p className="font-bold text-gray-700 whitespace-nowrap">
            {info?.costForTwo}
          </p>
        </div>

        <div className="mt-1 md:mt-2 flex justify-between text-xs text-gray-400 font-medium">
          <p className="truncate flex-1">
            {info?.locality}, {info?.locationInfo?.city?.name}
          </p>
          <p className="whitespace-nowrap ml-2">
            {info?.locationInfo?.distanceString}
          </p>
        </div>

        <div className="mt-3 md:mt-4 rounded-xl bg-emerald-500 p-2.5 md:p-3 text-white shadow-sm">
          <div className="flex justify-between items-center gap-2">
            <p className="font-extrabold text-xs md:text-sm truncate flex-1">
              🎉 {info?.offerInfoV3?.vendorOffer?.title}
            </p>
            <p className="font-black text-xs whitespace-nowrap bg-white/20 px-2 py-0.5 rounded-md">
              {info?.offerInfoV3?.vendorOffer?.subtext}
            </p>
          </div>
          <p className="text-[11px] md:text-xs font-medium opacity-90 mt-0.5 truncate">
            {info?.offerInfoV3?.vendorOffer?.subtitle}
          </p>
        </div>

        <div className="mt-2.5 rounded-xl bg-emerald-50 p-2.5 text-xs md:text-sm font-bold text-emerald-700 border border-emerald-100/50 truncate">
          {info?.customerOffer?.info?.description || "Up to 10% off with bank offers"}
        </div>

        <p className="mt-2.5 text-xs font-bold text-indigo-600 tracking-wide truncate">
          {info?.vendorOffer?.infos?.[0]?.header || "Get extra offers on booking"}
        </p>
      </div>
    </a>
  );
}