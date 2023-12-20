import Image from "next/image";

export default function ExpertSaysCard() {
  return (
    <>
      <div className="col-span-12 lg:col-span-3 p-4 rounded-xl border border-brandColor bg-brandColor/5">
        <div className="flex items-center gap-3">
          <div className="profile__image h-14 w-14 rounded-full overflow-hidden relative">
            <Image
              src="/pic.webp"
              fill
              alt="Profile"
              className="absolute inset-0 object-cover rounded-full ring-2 ring-brandColor"
            />
          </div>
          <div>
            <h5 className="text-base font-bold font-HindSiliguri_Regular">
              Jotish Malam
            </h5>
            <p className="text-sm font-HindSiliguri_Regular">UI/UX Designer</p>
          </div>
        </div>
        <div className="font-HindSiliguri_Regular p-4 mt-3">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.......
          </p>
        </div>
      </div>
    </>
  );
}
