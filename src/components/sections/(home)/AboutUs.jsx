import Image from "next/image";

export default function AboutUsSection() {
  return (
    <>
      <div className="bg-white py-20 px-5">
        <main>
          <h2 className="text-2xl font-bold font-LiAdorNoirrit_SemiBold mb-10 text-center lg:text-left">
            আমাদের সম্পর্কে
          </h2>

          <div className="w-full bg-brandColor/5 border border-brandColor rounded-3xl overflow-hidden">
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-span-6 relative hidden lg:block">
                <Image
                  src="/about.png"
                  fill
                  alt="About"
                  className="absolute inset-0 object-cover"
                />
              </div>
              <div className="col-span-12 lg:col-span-6 p-10">
                <h1 className="font-LiAdorNoirrit_SemiBold text-xl mb-5">
                  লার্ন উইথ সারোয়ার
                </h1>
                <p className="font-HindSiliguri_Regular">
                  {`"লার্ন উইথ সারোয়ার" চ্যানেলে বিভিন্ন প্রোগ্রামিং ভাষার শোকেস
                  এবং ওয়েব ডেভেলপমেন্ট টিউটোরিয়াল উপস্থাপন হয়, যাতে যুবকরা
                  শিখে নেয়ার মাধ্যমে প্রোগ্রামিং ও টেকনোলজির জগতে প্রবেশ করতে
                  পারে। যারা প্রোগ্রামিং কর্মক্ষেত্রে আগ্রহী, তাদের কেবল একটি
                  ইন্টারনেট সংযোগ এবং একটি ডিভাইস ব্যবহার করে প্রোগ্রামিং এবং
                  ডেভেলপমেন্ট শেখা সম্ভাবনা করতে দেয় "লার্ন উইথ সারোয়ার।
                  চ্যানেলটির উদ্দেশ্য হলো একটি প্রযুক্তির মাধ্যমে বাংলাদেশের
                  যুবজনের ক্ষমতা বাড়াতে এবং তাদেরকে আত্মনির্ভরশীল করতে সাহায্য
                  করা।`}
                </p>
 
                <Image src="/logo.png" height={100} width={150} alt="Logo" className="mt-7 mb-4" />

                <button className="btn-brand mt-5">আরও পড়ুন</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
