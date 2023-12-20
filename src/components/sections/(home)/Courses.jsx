import CourseCard from "@/components/sub-comp/CourseCard";

export default function CoursesSection() {
  return (
    <>
      <div className="bg-brandColor/5 py-20 px-5">
        <main>
          <h2 className="text-2xl font-bold font-LiAdorNoirrit_SemiBold mb-10 text-center lg:text-left">
            বর্তমান কোর্সসমূহ
          </h2>

          <div className="p-5 flex flex-wrap items-start justify-center gap-7">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </main>
      </div>
    </>
  );
}
