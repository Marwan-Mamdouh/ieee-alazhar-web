interface CardLogoProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CardLogo = ({ imageSrc, title, description }: CardLogoProps) => {
  return (
    <div className="bg-[#FFFFFF] w-full h-auto p-4 border-2 rounded-lg flex flex-col gap-3 justify-center">
      <img
        src={imageSrc}
        alt="card logo"
        className="max-w-[50px] sm:max-w-[60px] md:max-w-[70px] h-auto object-contain"
      />
      <h3 className="text-[#000000] text-base sm:text-lg font-bold">{title}</h3>
      <p className="text-[#05568D] text-sm sm:text-[15px] md:text-[16px] line-clamp-2">
        {description}
      </p>
    </div>
  );
};

export default CardLogo;
