import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <>
      <div className="bg-brandColor/5 font-LiAdorNoirrit_Regular">
        <main>
          <footer className="footer p-10 text-base-content">
            <aside>
              <Image src="/logo.png" height={100} width={250} alt="Logo" />
              <p className="font-LiAdorNoirrit_Regular text-xl">
                ফ্রিল্যান্সিং শেখার ভাষা হোক বাংলা
              </p>
            </aside>
            <nav className="text-base">
              <header className="footer-title">সার্ভিস সমূহ</header>
              <a className="link link-hover">ব্র্যান্ডিং</a>
              <a className="link link-hover">ডিজাইন</a>
              <a className="link link-hover">মার্কেটিং</a>
              <a className="link link-hover">অ্যাডভারটাইজিং</a>
            </nav>
            <nav className="text-base">
              <header className="footer-title">কোম্পানী</header>
              <Link href={"/about-us"} className="link link-hover">আমাদের সম্পর্কে</Link>
              <Link href={"/contact"} className="link link-hover">যোগাযোগ</Link>
              
            </nav>
            <nav className="text-base">
              <header className="footer-title">নীতিমালা</header>
              <a className="link link-hover">টার্মস এন্ড কন্ডিশন</a>
              <a className="link link-hover">প্রাইভেসী পলিসি</a>
              <a className="link link-hover">কুকি পলিসি</a>
            </nav>
          </footer>
        </main>
      </div>
    </>
  );
}
