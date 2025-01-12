import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Manik",
    designation: "Co-Organiser, SheBuilds",
    content:
      "The event was a perfect platform for us to connect with like-minded individuals and showcase our expertise. The structure of the sessions, the audience engagement, and the seamless logistics made this collaboration worthwhile. Kudos to the organizing team for making it such a memorable experience!",
    image: "/images/brands/manik.PNG",
    star: 5,
  },
  {
    id: 2,
    name: "Deepesh Sugnani",
    designation: "Partnerships & Operations Manager,IBW’24",
    content:
      "Collaborating on this event was an incredible experience. The organization, attention to detail, and professionalism displayed throughout the event were top-notch. Our team had the opportunity to engage with a highly enthusiastic audience, and the positive feedback we received was overwhelming. Looking forward to more successful partnerships in thefuture!",
    image: "/images/brands/deepek.PNG",
    star: 5,
  },
  {
    id: 3,
    name: "Rida",
    designation: "Partnership & Growth Manager, IndiaBlockchainMonth",
    content:
      "Our collaboration was a great success, thanks to the event's professionalism and seamless coordination. It allowed us to reach a wider audience and share our vision effectively. The exposure and networking opportunities we gained from this partnership were truly valuable. Well done to the entire team!",
    image: "/images/brands/rida.PNG",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonals" className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Discover what our clients say about their journey with us!"
          width="640px"
          center
        />

        <div data-pointer="hover" className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
