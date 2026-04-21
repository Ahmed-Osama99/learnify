import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  return (
    <section className="bg-gray-900">
      <div className="container">
        <div className="text-center">
          <h3 className="font-semibold text-primary-600 uppercase">
            Success Stories
          </h3>
          <p className="font-display mt-6 text-3xl font-bold text-gray-100 lg:text-4xl">
            What Our Students Say
          </p>
          <p className="mt-6 text-gray-500">
            Join thousands of students who have transformed their careers with
            our courses.
          </p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl bg-gray-800/50 p-8">
            <p className="flex gap-1">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              "Learnify helped me transition from marketing to software
              engineering in just 6 months. The web development bootcamp was
              incredibly comprehensive and practical."
            </p>
            <p className="mt-4 text-sm text-primary-400">
              Course: Web Development Bootcamp
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/images/instructors/michael.jpg"
                className="h-10 w-10 rounded-full"
                alt="Michael"
              />
              <p className="gap1 flex flex-col">
                <span className="text-gray-100">Alex Thompson</span>
                <span className="text-sm text-gray-400">
                  Software Engineer at Stripe
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-800/50 p-8">
            <p className="flex gap-1">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              "The machine learning courses are top-notch. I went from knowing
              basic Python to building production ML models. Now I work as a
              data scientist at a top tech company."
            </p>
            <p className="mt-4 text-sm text-primary-400">
              Course: Machine Learning A-Z
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/images/instructors/sarah.jpg"
                className="h-10 w-10 rounded-full"
                alt="Michael"
              />
              <p className="gap1 flex flex-col">
                <span className="text-gray-100">Maria Garcia</span>
                <span className="text-sm text-gray-400">
                  Data Scientist at Meta
                </span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-800/50 p-8">
            <p className="flex gap-1">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-500"
                size="sm"
              />
            </p>
            <p className="mt-4 leading-relaxed text-gray-400">
              "As a self-taught designer, Learnify filled all the gaps in my
              knowledge. The UI/UX courses taught me professional workflows and
              helped me land my dream job."
            </p>
            <p className="mt-4 text-sm text-primary-400">
              Course: UI/UX Design Complete Guide
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/images/instructors/david.jpg"
                className="h-10 w-10 rounded-full"
                alt="Michael"
              />
              <p className="gap1 flex flex-col">
                <span className="text-gray-100">James Wilson</span>
                <span className="text-sm text-gray-400">
                  Product Designer at Figma
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
