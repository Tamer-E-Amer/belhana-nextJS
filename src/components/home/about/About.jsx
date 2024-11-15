import Image from "next/image";
import sameh from "@/assets/imgs/sameh_about.webp";
const aboutParagraphs = [
  {
    id: 1,
    text: "Hello to all my friends on the Balhena Wa El Sheftchi page and its new website. Let me introduce myself. My name is Sameh Sedky. I am married and have children. My family is my whole life; they are the reason I live. Simply put, I am a person who loves life and loves to bring joy to everyone around me, even when I'm not in the mood.",
  },
  {
    id: 2,
    text: "My hobby, where I found my true passion, is cooking. I love it very much, and my maternal grandmother was the reason I got interested in something like this. I love cooking with passion, making dishes that look beautiful and catch your eye before you taste them.",
  },
  {
    id: 3,
    text: "When I thought of creating the Balhena Wa El Sheftchi page, the idea was to spread the culture of cooking simply. Anyone can enter the kitchen, follow the steps, and make the best dish that will lift their spirits. That's why I wanted to do it in an unconventional way: photographing each step of the recipe from start to finish. So when a visitor sees a specific recipe, they know exactly where to start and what the final dish will look like. This is different from explaining through videos or writing. Everything will be clear to the visitor at a glance, and they will know what the dish will look like when finished.",
  },
  {
    id: 4,
    text: "This idea has received great interaction, and I feel like I have a growing family on social media. To date, we have surpassed half a million followers. I am very proud of you and proud that God has blessed me with all this love from people. Honestly, this has placed a challenge on me not to just make any recipe, but to ensure that every recipe pleases this big family following me, because you always deserve the best.",
  },
  {
    id: 5,
    text: "I want to tell you that I love you from the bottom of my heart and will always be with you.",
  },
];

const About = () => {
  const renderdAbout = aboutParagraphs.map((p) => (
    <p
      className="text-dark-gray text-lg md:text-xl leading-relaxed text-center lg:text-start"
      key={p.id}
    >
      {p.text}
    </p>
  ));
  return (
    <>
      <section id="about" className="bg-white p-4 ">
        <div className="container flex flex-col items-center   justify-between gap-4 lg:flex-row lg:items-start ">
          {/* image */}
          <Image
            src={sameh}
            width={631.99}
            height={857.23}
            alt="Sameh Sedky"
            loading="lazy"
            placeholder="blur"
          />
          {/* text */}
          <div className="flex flex-col items-center ">
            <div className="flex flex-col gap-4 items-start justify-start  ">
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/assets/imgs/optimized/I_am_sameh.webp"}
                  width={396}
                  height={73}
                  alt="about dection title: I am sameh sedky"
                  className="hidden lg:block"
                />
                <Image
                  src={"/assets/imgs/optimized/sameh_about_small.webp"}
                  width={264}
                  height={50}
                  alt="about dection title: I am sameh sedky"
                  className="lg:hidden"
                />
              </div>
              {/* Paragraphs */}
              {renderdAbout}
              {/* signature */}
            </div>
            <div className="w-full flex items-center justify-center ">
              <Image
                src={"/assets/imgs/optimized/signature1.webp"}
                width={240}
                height={30}
                alt="Sameh signature"
              />
              <Image
                src={"/assets/imgs/optimized/red_pepper.webp"}
                width={125}
                height={125}
                alt="Red pepper decore"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
