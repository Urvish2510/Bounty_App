import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { QuickIntroCards } from "./QuickIntroCards";

export const QuickIntro = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Mastering Web Application Vulnerabilities
            </span>{" "}
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Whether you're a beginner or an expert, dive into real-world
          challenges based on actual bug bounty findings. Learn to identify and
          understand common web vulnerabilities, and discover the mistakes
          developers make that lead to security flaws.
        </p>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          There are no flags to find—focus on uncovering vulnerabilities and
          mastering the techniques that hackers use. Ready to take on the
          challenge? Let's get started!
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <QuickIntroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
