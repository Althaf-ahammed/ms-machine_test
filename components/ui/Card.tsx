interface CardProps {
    index: string;
    title: string;
    description: string;
    className?: string;
  }
  
  const Card: React.FC<CardProps> = ({
    index,
    title,
    description,
    className,
  }) => {
    return (
      <div className={`bg-[#ECFAFF] p-6 md:p-8 lg:px-8 lg:pt-9 lg:py-16 rounded-2xl ${className}`}>
        <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">{index}</p>
  
        <div className="bg-[#00466D] h-0.5 my-4 md:my-5 lg:my-7"></div>
  
        <h1 className="text-2xl md:text-2xl lg:text-3xl font-semibold">{title}</h1>
  
        <p className="text-base md:text-lg font-normal mt-4">{description}</p>
      </div>
    );
  };
  
  export default Card;
  