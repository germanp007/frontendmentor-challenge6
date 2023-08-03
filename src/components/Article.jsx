const Article = ({ title, text, image, color }) => {
  return (
    <article
      className="h-[88vh] w-[100vw] bg-cover bg-no-repeat text-center flex flex-col justify-end pb-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className={`${color} font-Fraunces mt-4 text-[2rem] font-extrabold`}>
        {" "}
        {title}
      </h1>
      <p className={`${color} font-Barlow text-base text-center p-4`}>{text}</p>
    </article>
  );
};

export default Article;
