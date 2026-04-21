import { faCheckCircle, faClock } from "@fortawesome/free-regular-svg-icons";
import { faCode, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyUs = () => {
  return (
    <section>
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h3 className="font-semibold text-primary-600 uppercase">
            Why Choose Us
          </h3>
          <p className="font-display mt-6 text-3xl font-bold lg:text-4xl">
            The Best Platform to Learn New Skills
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-500">
            We provide everything you need to succeed in your learning journey.
            Our platform is designed to make learning effective and enjoyable.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="w-fit rounded-xl bg-primary-200 p-3 text-primary-700 dark:bg-primary-950 dark:text-primary-500">
                <FontAwesomeIcon icon={faClock} size="lg" />
              </div>
              <p className="flex flex-col gap-1">
                <span className="font-semibold">Learn at Your Pace</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Access courses anytime, anywhere. Learn on your schedule with
                  lifetime access to all purchased courses.
                </span>
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-fit rounded-xl bg-primary-200 p-3 text-primary-700 dark:bg-primary-950 dark:text-primary-500">
                <FontAwesomeIcon icon={faUserGroup} size="lg" />
              </div>
              <p className="flex flex-col gap-1">
                <span className="font-semibold">Expert Instructors</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Learn from industry professionals working at top companies
                  like Google, Meta, and Amazon.
                </span>
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-fit rounded-xl bg-primary-200 p-3 text-primary-700 dark:bg-primary-950 dark:text-primary-500">
                <FontAwesomeIcon icon={faCode} size="lg" />
              </div>
              <p className="flex flex-col gap-1">
                <span className="font-semibold">Hands-on Projects</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Build real-world projects and add them to your portfolio.
                  Practice what you learn with coding exercises.
                </span>
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-fit rounded-xl bg-primary-200 p-3 text-primary-700 dark:bg-primary-950 dark:text-primary-500">
                <FontAwesomeIcon icon={faCheckCircle} size="lg" />
              </div>
              <p className="flex flex-col gap-1">
                <span className="font-semibold">Certificates</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Earn verified certificates upon completion. Share your
                  achievements on LinkedIn and your resume.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="video-box relative flex items-center justify-center">
          <img
            src="/public/images/courses/aws.jpg"
            alt="Why Us video"
            className="rounded-3xl"
          />
          <button
            aria-label="Play video"
            className="play-button absolute top-1/2 left-1/2 -translate-1/2 transform rounded-full bg-white p-6"
          >
            <FontAwesomeIcon icon={faPlay} className="text-primary-600" />
          </button>
          <div className="absolute -bottom-10 left-1/2 flex w-full max-w-[300px] -translate-x-1/2 transform items-center gap-3 rounded-2xl bg-white p-6 shadow-2xl lg:-left-6 lg:translate-x-0 dark:bg-gray-800">
            <div className="flex">
              <img
                src="/public/images/instructors/david.jpg"
                alt="Student one"
                className="h-10 w-10 rounded-full border-2 border-white"
              />
              <img
                src="/public/images/instructors/emily.jpg"
                alt="Student two"
                className="-ml-2 h-10 w-10 rounded-full border-2 border-white"
              />
              <img
                src="/public/images/instructors/sarah.jpg"
                alt="Student three"
                className="-ml-2 h-10 w-10 rounded-full border-2 border-white"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                50K+
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Happy Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
