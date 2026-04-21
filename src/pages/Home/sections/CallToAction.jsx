import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <section className="relative !py-20 bg-primary-600">
      {/* background */}
      <div className="square-gradient absolute inset-0"></div>
      <div className="relative container text-center text-gray-50">
        <h2 className="font-display text-3xl font-bold md:text-5xl">
          Ready to Start Learning?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-100">
          Join over 50,000 students already learning on Learnify. Get unlimited
          access to all courses with our Pro plan.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="cta-btn">
            Start Learning Free
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link
            to="/"
            className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/30"
          >
            Browse Courses
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-primary-200">
          <p className="text-sm">
            {" "}
            <FontAwesomeIcon icon={faCheck} className="me-2" /> No credit card
            required
          </p>
          <p className="text-sm">
            {" "}
            <FontAwesomeIcon icon={faCheck} className="me-2" /> 7-day free Pro
            trial
          </p>
          <p className="text-sm">
            {" "}
            <FontAwesomeIcon icon={faCheck} className="me-2" /> Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
