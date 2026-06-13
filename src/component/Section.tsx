import bubble1 from "../assets/section-bubles/bubble1.png";
import bubble2 from "../assets/section-bubles/bubble2.png";
import Logo from "../assets/logo.WebP";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface SectionProps {
  text: string;
  additionalText?: string;
  showSocialIcons?: boolean;
  showIeeeBox?: boolean;
}

const Section = ({
  text,
  additionalText,
  showSocialIcons = false,
  showIeeeBox = false,
}: SectionProps) => {
  return (
    <div
      className=" text-white h-[400px] w-full flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(to right, #0F3063 , #1E61C9 600px)",
      }}
    >
      <div className="container mx-auto text-center flex flex-col items-center gap-4">
        <p className="whitespace-pre-line md:text-5xl font-bold z-30">{text}</p>
        {additionalText && (
          <p className="text-lg font-normal mt-2 z-30">{additionalText}</p>
        )}
        {showIeeeBox && (
          <div className="flex items-center gap-4 border border-white rounded-md px-4 py-2 w-fit">
            <img
              src={Logo}
              alt="IEEE Logo"
              className="w-10 h-10 object-contain font z-30"
              loading="lazy"
            />
            <span className="z-30 text-[30px] font-bold">IEEE</span>
          </div>
        )}
        {showSocialIcons && (
          <div className="z-30 flex gap-3 mt-4">
            {[
              {
                icon: FaFacebookF,
                url: "https://www.facebook.com/share/1A7kWQHZ4e/",
              },
              {
                icon: FaInstagram,
                url: "https://www.instagram.com/ieee.alazhar?igsh=MTAwN2tmd2doNG44NA==",
              },
              {
                icon: FaLinkedinIn,
                url: "https://www.linkedin.com/company/ieee-alazhar/",
              },
            ].map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="z-30 w-9 h-9 rounded-full bg-white text-blue-700 flex items-center justify-center hover:bg-gray-200 transition duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        )}
      </div>
      {/* Bubble background as part of the background, centered */}
      <img
        src={bubble1}
        alt="bubble1"
        loading="lazy"
        className="absolute top-1/2 left-1/2 transform -translate-x-[70%] -translate-y-[300px] lg:-translate-y-[250px] xl:-translate-y-[210px] 2xl:-translate-y-[350px] opacity-70 w-[60%] max-w-[200px] z-10 rotate-[55deg]"
      />
      <img
        src={bubble2}
        alt="bubble2"
        loading="lazy"
        className="absolute top-1/2 left-1/2 transform -translate-x-[30%] -translate-y-[245px] xl:-translate-y-[195px] 2xl:-translate-y-[310px] w-[60%] max-w-[200px] z-10 opacity-70"
      />
    </div>
  );
};

export default Section;
