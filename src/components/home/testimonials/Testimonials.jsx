"use client";
import { TestimonialCard } from "@/components";
const testimonialData = [
  {
    id: 1,
    text: "Sameh, your recipes have truly transformed my cooking skills! My family can't get enough of your dishes. Thank you for making me a kitchen star!",
    user: {
      name: "Mona K.",
      date: "01-04-2024",
    },
    ratings: 5,
  },
  {
    id: 2,
    text: "Man, I can't resist trying out your recipes! They've made such a difference in my cooking, but I think I've gained a few pounds because they're just too delicious!",
    user: {
      name: "Ahmad R.",
      date: "015-05-2024",
    },
    ratings: 5,
  },
  {
    id: 3,
    text: "Sameh, you're a genius in the kitchen! My husband keeps joking that you're the reason he's had to buy new pants. We just can't stop eating your amazing creations!",
    user: {
      name: "Lyla A.",
      date: "01-06-2024",
    },
    ratings: 5,
  },
  {
    id: 4,
    text: "Your recipes are so easy to follow and the results are always fantastic. My kids ask for your dishes every week. You've definitely upped my cooking game!",
    user: {
      name: "Nadia M.",
      date: "51-06-2024",
    },
    ratings: 5,
  },
  {
    id: 5,
    text: "Sameh, your dishes are a hit in our house. My wife says she's learned so much from you, but I jokingly blame you for the extra weight we've both gained. Keep up the great work!",
    user: {
      name: "Youssef T.",
      date: "18-06-2024",
    },
    ratings: 5,
  },
  {
    id: 6,
    text: "I've never enjoyed cooking as much as I do now, thanks to you. My friends can't believe how good my food has become. You're the best, Sameh!",
    user: {
      name: "Mai T.",
      date: "01-07-2024",
    },
    ratings: 5,
  },
];

const Testimonials = () => {
  const renderTestimonials = testimonialData.map((t) => (
    <TestimonialCard key={t.id} data={t} />
  ));
  return (
    <>
      <section
        className="bg-radial-gradient from-white to-gray-300  px-4 lg:px-0 pt-8 pb-16 relative"
        id="testimonials"
      >
        <div className="container flex flex-col items-center justify-between gap-8">
          <div className="text-center space-y-2">
            <h3 className="text-lg text-dark-gray font-semibold">
              Your words about me have made me very, very happy and encourage me
              to always give you my best.
            </h3>
            <h3 className="text-lg text-dark-gray font-semibold">
              I love you, my beautiful family
            </h3>
          </div>
          {/* testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8  lg:gap-16 z-10">
            {renderTestimonials}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
