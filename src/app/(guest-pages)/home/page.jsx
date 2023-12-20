import AboutUsSection from "@/components/sections/(home)/AboutUs";
import FaqSection from "@/components/sections/(home)/Faq";
import CoursesSection from "@/components/sections/(home)/Courses";
import ExpertSaysSection from "@/components/sections/(home)/ExpertsSays";
import HeroSection from "@/components/sections/(home)/Hero";
import TestimonialSection from "@/components/sections/(home)/Testimonials";
import ExpertSaysCard from "@/components/sub-comp/ExpertSays";
import Navbar from "@/components/sub-comp/Navbar";
import JoinCourse from "@/components/sections/(home)/JoinCourse";
import FooterSection from "@/components/sections/(home)/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <AboutUsSection />
      <TestimonialSection />
      <ExpertSaysSection />
      <FaqSection />
      <JoinCourse />
      <FooterSection />
    </>
  );
}
