const TextComponent = ({ title, text, color }) => {
  return (
    <div className="h-[60vh] text-center flex flex-col justify-evenly">
      <h1 className="text-Very-dark-desaturated-blue font-Fraunces mt-4 text-[2.2rem] font-extrabold">
        {" "}
        {title}
      </h1>
      <p className="text-Dark-grayish-blue font-Barlow text-lg text-center px-4">
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
          className={`w-[137px] h-[10px] ${color} rounded-full absolute bottom-0 left-0 right-0 m-auto opacity-[0.2]`}
        ></div>
      </div>
    </div>
  );
};

export default TextComponent;
