import { Link } from "react-router-dom";
const PageIntro = ({ pageName, pageTitle, pageDesc }) => {
  return (
    <section className="bg-gray-200 !py-12 dark:bg-gray-900/50">
      <div className="container">
        <nav className="text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary-500">
            Home{" "}
          </Link>{" "}
          <span className="text-gray-500">/ </span>
          <span className="font-medium">{pageName}</span>
        </nav>
        <h1 className="font-display mt-6 text-4xl font-bold lg:text-5xl">
          {pageTitle}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {pageDesc}
        </p>
      </div>
    </section>
  );
};

export default PageIntro;
