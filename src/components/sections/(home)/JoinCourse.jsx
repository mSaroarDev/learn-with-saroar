import Image from "next/image";

export default function JoinCourse() {
  return (
    <>
      <section className="py-20">
        <main className="flex flex-col gap-5 items-center justify-center">
          <h2 className="font-LiAdorNoirrit_Bold text-5xl">কোর্স শুরু করুন</h2>

          <a
            target="_black"
            href={"/sign-up"}
            className="px-7 py-3 rounded-full bg-red-500/10 text-red-500 duration-300 font-LiAdorNoirrit_Regular flex items-center gap-2 w-fit"
          >
            <Image src="/youtube.png" height={20} width={20} alt="Play" />
            টিউটোরিয়ালস দেখুন
          </a>
        </main>
      </section>
    </>
  );
}
