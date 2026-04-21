import {
  faArrowRight,
  faCheckCircle,
  faShield,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950">
      {/* gradient background */}
      <div className="square-gradient absolute inset-0"></div>
      {/* background pattern */}
      <div className="absolute -top-10 -right-40 h-150 w-150 bg-primary-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 -left-10 h-50 w-50 bg-accent-600/20 blur-3xl"></div>
      {/* container */}
      <div className="relative container text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-3 py-2 text-sm font-medium text-primary-300">
          <FontAwesomeIcon icon={faCheckCircle} />
          Trusted by 50,000+ learners worldwide
        </div>
        {/* Headline */}
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Learn Without Limits{" "}
            <span className="text-gradient mt-2 block">Learnify</span>
          </h1>
          <p className="mt-6 text-lg text-primary-200 lg:text-xl">
            Master new skills with world-class instructors. Access thousands of
            courses in technology, business, design, and more.
          </p>
        </div>
        {/* Call to Action (CTA) buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/courses" className="cta-btn">
            Explore Courses
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link
            to="/pricing"
            className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white hover:bg-white/30"
          >
            View Pricing
          </Link>
        </div>
        {/* trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-primary-200">
          <div className="text-sm">
            {" "}
            <FontAwesomeIcon
              icon={faStar}
              className="me-2 text-yellow-400"
            />{" "}
            4.8 average rating
          </div>
          <div className="text-sm">
            {" "}
            <FontAwesomeIcon
              icon={faShield}
              className="me-2 text-accent-400"
            />{" "}
            30-day money-back guarantee
          </div>
          <div className="text-sm">
            {" "}
            <FontAwesomeIcon
              icon={faClock}
              className="me-2 text-accent-400"
            />{" "}
            Lifetime access
          </div>
        </div>
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl font-bold text-white md:text-5xl">
              50K+
            </p>
            <p className="mt-2 text-primary-300">Active Students</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-white md:text-5xl">
              500+
            </p>
            <p className="mt-2 text-primary-300">Expert Instructors</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-white md:text-5xl">
              2,500+
            </p>
            <p className="mt-2 text-primary-300">Quality Courses</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-white md:text-5xl">
              95%
            </p>
            <p className="mt-2 text-primary-300">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
