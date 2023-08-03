import emily from "../../images/image-emily.jpg";
import thomas from "../../images/image-thomas.jpg";
import jennie from "../../images/image-jennie.jpg";

const clients = [
  {
    testinonial:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    job: "Marketing Director",
    imageSrc: emily, //avatar,
  },

  {
    testinonial:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    job: "Chief Operating Officer",
    imageSrc: thomas,
  },
  {
    testinonial:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    job: "Business Owner",
    imageSrc: jennie,
  },
];

const Testimonials = () => {
  return (
    <section className="text-center min-h-screen font-Barlow">
      <h1 className="mt-[50px] mb-[20px] uppercase font-Fraunces tracking-widest text-Grayish-blue">
        Client Testimonials
      </h1>
      {clients.map((ele, index) => {
        return (
          <div
            key={index}
            className="h-[300px] flex flex-col items-center justify-evenly py-4 px-8"
          >
            <img
              src={ele.imageSrc}
              alt={ele.imageSrc}
              className="rounded-[50%] w-[60px]"
            />
            <p className="text-Very-dark-grayish-blue">{ele.testinonial}</p>
            <h2 className="font-Fraunces font-bold text-xl text-Very-dark-desaturated-blue">
              {ele.name}
            </h2>
            <h6 className=" font-normal text-sm text-Grayish-blue">
              {ele.job}
            </h6>
          </div>
        );
      })}
    </section>
  );
};

export default Testimonials;
