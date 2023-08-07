const Article = ({ title, text, image, color, order }) => {
  return (
    <article
      className={`h-[88vh] bg-cover bg-center text-center flex flex-col justify-end pb-10 ${order} tablet:bg-cover tablet:bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1
        className={`${color} font-Fraunces mt-4 text-[2rem] font-extrabold desktop:tex`}
      >
        {" "}
        {title}
      </h1>
      <p className={`${color} font-Barlow text-base text-center p-4 md:mx-32`}>
        {text}
      </p>
    </article>
  );
};

export default Article;
