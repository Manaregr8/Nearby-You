import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Abhishek Kashyap",
    designation: "Founder of Zeeloops",
    content:
      "The Zeeloops website is now responsive, fast, attractive, and SEO-optimized. The transformation has been remarkable, and the attention to detail has significantly improved our online presence. I'm thrilled with the results and the professionalism displayed throughout the project!",
    image: "/images/brands/abhishek.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Sachin Chawla",
    designation: "Founder of Respikart | Surgikart",
    content:
      "The team did an outstanding job optimizing our SEO, enhancing our website's UI/UX, and automating our Google My Business profiles. Their innovative WhatsApp marketing strategies have also boosted our customer engagement. It's been a game-changer for our business!",
    image: "/images/brands/sachin.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Komal Chauhan",
    designation: "Founder of TerxLabs",
    content:
      "Our collaboration with this team has been invaluable. They helped us serve several clients effectively and made complex projects possible with their expertise and coordination. The partnership has been a significant factor in our collaborative success, Looking forward for more",
    image: "/images/brands/komal.jpg",
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
