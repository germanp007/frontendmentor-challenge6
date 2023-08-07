const TextComponent = ({ title, text, color, order }) => {
  return (
    <div
      className={`min-h-[450px] md:h-full text-center flex flex-col justify-evenly ${order} md:text-left md:justify-evenly md:px-10 lg:p-24`}
    >
      <h1 className="text-Very-dark-desaturated-blue font-Fraunces mt-4 text-[2.2rem] font-extrabold md:mt-0 md:text-[2.8rem]">
        {" "}
        {title}
      </h1>
      <p className="text-Dark-grayish-blue font-Barlow text-lg text-center px-4 md:text-left md:px-0">
        {text}
      </p>
      <div className="relative">
        <a
          href="#"
          className="font-Fraunces text-xl text-Very-dark-desaturated-blue"
        >
          Learn more
        </a>
        <div
          className={`w-[137px] h-[10px] ${color} rounded-full absolute left-0 right-0 m-auto opacity-[0.2] md:ml-[-10px]`}
        ></div>
      </div>
    </div>
  );
};

export default TextComponent;
