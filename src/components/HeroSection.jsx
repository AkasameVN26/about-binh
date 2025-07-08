import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center rounded-full profile-picture-container">
          <img
            src="/about-binh/me.png"
            alt="Pedro Machado"
            className="w-[90%] h-[90%] rounded-full object-cover shadow-lg relative z-20"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">
              {" "}
              Xin Chào, mình là
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Thái Bình
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Mình kể chuyện bằng code. Là một nhà phát triển tương lai,mình xây
            dựng những không gian web tương tác và kiến tạo những thế giới game
            sống động. Nơi này là giao điểm giữa đam mê, logic và sáng tạo của
            mình.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-glow">
              Những dự án của mình
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          {" "}
          Kéo xuống để xem nào!{" "}
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
