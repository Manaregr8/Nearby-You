import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | DEVRhylme Foundation",
  description: "Welcome to DevRhylme Foundation, an innovative AI startup at the forefront of Generative AI, OpenCV, and Web 3.0 technologies. We are committed to fostering a thriving developer community and organizing impactful events for diverse clients. Our mission is to build cutting-edge solutions while empowering organizations globally through collaborative innovation and knowledge-sharing.",
};

const AboutPage = () => {
  return (
    <main>
      {/* <Breadcrumb pageName="About Us Page" /> */}
      <About />
      <Team showAll={true} />
    </main>
  );
};

export default AboutPage;
