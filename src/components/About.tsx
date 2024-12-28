// import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse align-middle md:flex-row md:align-middle gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col align-middle">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                we are dedicated to helping ethical hackers and cybersecurity
                enthusiasts sharpen their skills in the world of bug bounty
                hunting.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                After years of uncovering vulnerabilities and contributing to
                various bug bounty programs, we wanted to create a space where
                individuals could not only learn but also experience the
                excitement of solving real-world security challenges. Our goal
                is to provide a comprehensive platform for discovering
                vulnerabilities, learning advanced techniques, and mastering the
                craft of bug bounty hunting.
              </p>
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
