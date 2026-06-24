export default function Header() {
  return (
    <header className="bg-[#ff5200] font-swiggy">
      <div className="flex justify-between container mx-auto py-8">
        <img
          className="w-40 h-12 ml-2"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="Swiggy Logo"
        />

        <div className="text-white text-base font-bold flex gap-15 items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/corporate/"
          >
            Swiggy Corporate
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.swiggy.com/login"
          >
            Partner With Us
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="border border-white py-3 px-4 rounded-2xl"
            href="https://www.swiggy.com/corporate/"
          >
            Get the App
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            className="border border-black bg-black rounded-2xl py-3 px-4"
            href="https://www.swiggy.com/login"
          >
            Sign In
          </a>
        </div>
      </div>

      <div className="pt-16 py-9 relative">
        <img
          className="h-110 w-60 absolute top-0 left-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />

        <img
          className="h-110 w-60 absolute top-0 right-0"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
          Order Food & groceries. Discover best restaurants. Swiggy it!
        </div>

        <div className="max-w-[70%] container mx-auto flex gap-5 mt-5">
          <input
            className="bg-white w-[40%] text-2xl px-6 py-4 rounded-2xl"
            type="text"
            placeholder="Delhi, India"
          />

          <input
            className="bg-white w-[40%] text-2xl px-6 py-4 rounded-2xl"
            type="text"
            placeholder="Search for restaurants and items"
          />
        </div>

        <div className="max-w-[80%] container mx-auto flex justify-center gap-4 mt-10">
          <a href="https://www.swiggy.com/restaurants">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
              alt=""
            />
          </a>

          <a href="https://www.swiggy.com/restaurants">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
              alt=""
            />
          </a>

          <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/7a7904a7-e0a9-4466-8226-715999664e83_IM2BU.png"
              alt=""
            />
          </a>

          <a href="https://www.swiggy.com/dineout">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/8fa21ee7-affd-43a4-b14d-978c9b372159_DO2BU.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </header>
  );
}