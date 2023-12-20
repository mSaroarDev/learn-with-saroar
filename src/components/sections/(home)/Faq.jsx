import Image from "next/image";
import Link from "next/link";

export default function FaqSection() {
  return (
    <>
      <div className="bg-white py-20 px-5">
        <main>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <div className="accordion__project">
                <h2 className="text-6xl font-bold font-LiAdorNoirrit_SemiBold mb-4 pt-14 text-center lg:text-left">
                  সর্বাধিক জিজ্ঞাসিত <br /> প্রশ্নাবলী
                </h2>

                <Link className="btn-brand mt-5 inline-block" href={"/"}>প্রশ্নসমূহ দেখুন</Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Image src="/faq.jpg" height={300} width={450} alt="Faq" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
