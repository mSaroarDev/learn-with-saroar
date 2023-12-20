import CourseCard from "@/components/sub-comp/CourseCard";
import TestimonialCard from "@/components/sub-comp/TestimonialCard";

export default function TestimonialSection() {
  return (
    <>
      <div className="bg-brandColor/5 py-20 px-5">
        <main>
          <h2 className="text-2xl font-bold font-LiAdorNoirrit_SemiBold mb-10 text-center lg:text-left">
            লার্নাররা কি বলেন?
          </h2>

          <div className="grid grid-cols-12 gap-4">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </main>
      </div>
    </>
  );
}
