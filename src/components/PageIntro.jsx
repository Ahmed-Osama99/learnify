import { Link } from "react-router-dom";
const PageIntro = () => {
  return (
    <section className="bg-gray-200 !py-12 dark:bg-gray-900/50">
      <div className="container">
        <nav className="text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary-500">
            Home{" "}
          </Link>{" "}
          <span className="text-gray-500">/</span>
          <Link to="/courses" className="font-medium">
            {" "}
            All Courses
          </Link>
        </nav>
        <h1 className="font-display mt-6 text-4xl font-bold lg:text-5xl">
          All Courses
        </h1>
        <p className="mt-4 text-lg ">8 Courses Available</p>
      </div>
    </section>
  );
};

export default PageIntro;
