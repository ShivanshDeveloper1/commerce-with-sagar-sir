import CoursePreview from "@/component/(homepage)/CoursePreview";
import AboutVisionary from "@/component/(homepage)/History";
import History from "@/component/(homepage)/History";
import Homepage from "@/component/(homepage)/Homepage";
import HomepagePartner from "@/component/(homepage)/HomepagePartner";
import ImageContainer from "@/component/(homepage)/Image";
import ResultsPreview from "@/component/(homepage)/ResultsPreview";
import ReviewSlider from "@/component/(homepage)/ReviewSlider";
import WhyChooseUs from "@/component/(homepage)/WhyChoose";

export default function Home() {
  return (
    <>
             
        <HomepagePartner />
      <ImageContainer />
      <AboutVisionary />
      <CoursePreview />
      <ResultsPreview />
      <ReviewSlider />
      <WhyChooseUs />
   
  
    </>
  );
}
