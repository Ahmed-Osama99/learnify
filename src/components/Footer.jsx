import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container grid gap-x-20 gap-y-10 py-12 lg:grid-cols-3">
        <div className="">
          <Link className="group flex items-center gap-2" to="/">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 transition-colors group-hover:bg-primary-700">
              <FontAwesomeIcon
                icon={faBookOpen}
                size="lg"
                className="text-white"
              />
            </div>
            <span className="font-display text-lg font-bold text-gray-900 md:text-xl dark:text-white">
              Learnify
            </span>
          </Link>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {" "}
            Master new skills with world-class instructors. Access thousands of
            courses in technology, business, design, and more.{" "}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://x.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-700 transition-colors hover:bg-primary-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary-950/30 dark:hover:text-primary-400"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://linkedin.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-700 transition-colors hover:bg-primary-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary-950/30 dark:hover:text-primary-400"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://youtube.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-700 transition-colors hover:bg-primary-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary-950/30 dark:hover:text-primary-400"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://instgram.com"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-gray-700 transition-colors hover:bg-primary-200 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-primary-950/30 dark:hover:text-primary-400"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-4 md:grid-cols-3 lg:col-span-2">
          <div className="flex flex-col gap-3">
            <h3>Categories</h3>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Web Development
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Data Science{" "}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              UI/UX Design
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Business
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Digital Marketing{" "}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Mobile Development{" "}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3>Company</h3>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              About Us
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Become an Instructor
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Careers
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Blog
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Press
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Contact{" "}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3>Support</h3>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Help Center{" "}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              FAQs{" "}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Terms of Service{" "}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Privacy Policy{" "}
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Accessability{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* copy rights */}
      <div className="border-t border-gray-300 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-center gap-6 py-6 text-center text-sm text-gray-500 sm:justify-between dark:text-gray-400">
          <p className="">@ 2026 Learnify. All Rights reserved</p>
          <p className="flex items-center gap-3">
            Available on:
            <a
              href="#"
              className="rounded-lg bg-gray-900 px-2 py-1 text-gray-50 dark:bg-gray-800"
            >
              <FontAwesomeIcon icon={faApple} className="mr-1" />
              iOS
            </a>
            <a
              href="#"
              className="rounded-lg bg-gray-900 px-2 py-1 text-gray-50 dark:bg-gray-800"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="mr-1" />
              Android
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
