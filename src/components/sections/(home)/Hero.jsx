"use client";
import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";

export default function HeroSection() {
  return (
    <>
      <div className="bg-base-100">
        <main>
          <div className="h-screen w-full flex items-center justify-between p-5">
            <div className="grid grid-cols-12 mt-20 lg:mt-0">
            <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col items-start gap-2 min-w-1/2">
              <p className="font-LiAdorNoirrit_Regular">লার্ন উইথ সারোয়ার</p>
              <h1 className="font-LiAdorNoirrit_Bold text-5xl lg:text-6xl lg:leading-[72px]">
                ফ্রিল্যান্সিং শেখার <br /> ভাষা হোক বাংলা
              </h1>
              <p className="text-base font-HindSiliguri_Regular">
                কাজ শিখে ফ্রিল্যান্স মার্কেটে নিজেকে গড়ে তোলার জন্য <br />{" "}
                আনলিমিটেড ফ্রি রিসোর্স এবং কন্টেন্ট
              </p>

              <div className="flex items-center gap-3 mt-7">
                <Link
                  href={"/sign-up"}
                  className="bg-brandColor text-white px-7 py-3 rounded-full hover:bg-brandColor/20 hover:text-brandColor duration-300 font-LiAdorNoirrit_Regular"
                >
                  রেজিষ্ট্রার করুন
                </Link>
                <Link
                  href={"/sign-up"}
                  className="px-7 py-3 rounded-full bg-red-500/10 text-red-500 duration-300 font-LiAdorNoirrit_Regular flex items-center gap-2"
                >
                  <Image src="/youtube.png" height={20} width={20} alt="Play" />
                  টিউটোরিয়ালস
                </Link>
              </div>

              <div className="social__links flex items-center justify-center lg:justify-start gap-5 mt-7 text-center">
                <a
                  href="http://www.youtube.com"
                  className="h-fit w-fit bg-red-500/10 rounded-full flex items-center gap-1 hover-it"
                >
                  <Image
                    src="/youtube-2.png"
                    height={30}
                    width={30}
                    alt="Youtube"
                    className="hover-it"
                  />
                  <span className="on-hover font-LiAdorNoirrit_Regular pr-2 duration-300">
                    ইউটিউব
                  </span>
                </a>

                <a
                  href="http://www.youtube.com"
                  className="h-fit w-fit bg-black/10 rounded-full flex items-center gap-1 hover-it"
                >
                  <Image
                    src="/github.png"
                    height={30}
                    width={30}
                    alt="Youtube"
                    className="hover-it"
                  />
                  <span className="on-hover font-LiAdorNoirrit_Regular pr-2 duration-300">
                    গিটহাব
                  </span>
                </a>

                <a
                  href="http://www.youtube.com"
                  className="h-fit w-fit bg-blue-500/10 rounded-full flex items-center gap-1 hover-it"
                >
                  <Image
                    src="/facebook.png"
                    height={30}
                    width={30}
                    alt="Youtube"
                    className="hover-it"
                  />
                  <span className="on-hover font-LiAdorNoirrit_Regular pr-2 duration-300">
                    ফেইসবুক
                  </span>
                </a>
              </div>
            </div>
            </div>
            <div className="col-span-12 lg:col-span-6 p-5">
              <div className="w-full h-full relative">
                <Image
                  src="/rnext-thumb.png"
                  width={600}
                  height={300}
                  alt="Image"
                  className="rounded-3xl hover:scale-105 duration-200 mt-6 lg:mt-0"
                />
              </div>
            </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
