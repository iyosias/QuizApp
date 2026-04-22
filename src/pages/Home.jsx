import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-center gap-5 overflow-auto mt-8 lg-w-lg">
      <h1 className="text-5xl pt-5 lg:pt-0">Welcome</h1>

      <div className="flex flex-col lg:flex-row lg:w-250 xl:w-300">
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src="hero-image.jpg"
            className="w-100 rounded-4xl md:w-120"
            alt="hero image"
          />
        </div>
        <div className="flex flex-col md:px-4 justify-center text-gray-900 mx-5">
          <h1 className="p-2 font-brand-subheader font-medium text-xl leading-normal mt-3">
            Discover a smarter way to play, learn, and challenge your mind with
            our dynamic quiz platform.
            <span className="text-indigo-700">
              {" "}
              Powered by a flexible API, our game offers a wide spectrum of
              categories—from History and Geography to Math, Grammar, Road
              Signs, and even the Periodic Table—designed for kids, teens, and
              adults alike.
            </span>
          </h1>
          <p className="p-2 font-brand-paragraph text-pretty text-lg font-light leading-relaxed mt-2 text-gray-700">
            Before each quiz, users can tailor their experience by selecting a
            preferred difficulty level, ensuring the perfect balance of fun and
            challenge. With engaging multiple-choice questions, interactive
            image-based answers, drag-and-drop ordering, and matching exercises,
            every session feels fresh and immersive.{" "}
          </p>
          <p className="p-2 font-brand-paragraph text-pretty text-lg font-light leading-relaxed mt-2 text-gray-700">
            Whether you're playing for fun or an organization looking to train
            and assess employees with custom-curated quizzes, our platform
            adapts to your needs—making learning both effective and enjoyable.
          </p>
        </div>
      </div>
      <div className="pb-10">
        <button
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 focus:outline-none  shadow-xl text-white font-semibold rounded-2xl uppercase text-lg tracking-wider"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Take the Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;
