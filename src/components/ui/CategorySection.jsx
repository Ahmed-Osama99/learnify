import CategoryCard from "./CategoryCard";
import {
  faMobileScreen,
  faSwatchbook,
  faSignal,
  faCode,
  faBriefcase,
  faBullhorn,
  faCloud,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

const categoryData = [
  {
    id: "cat-web",
    icon: faCode,
    title: "Web Development",
    styleClass: "cat-web",
    desc: "Build modern websites and web applications",
    numOfCourses: 156,
  },
  {
    id: "cat-data-science",
    icon: faSignal,
    title: "Data Science",
    styleClass: "cat-data",
    desc: "Analyze data and build ML models ",
    numOfCourses: 98,
  },
  {
    id: "cat-uiux-design",
    icon: faSwatchbook,
    title: "UI/UX Design",
    styleClass: "cat-uiux",
    desc: "Create beautiful user experiences",
    numOfCourses: 124,
  },
  {
    id: "cat-business",
    icon: faBriefcase,
    title: "Business",
    styleClass: "cat-business",
    desc: "Grow your career and business",
    numOfCourses: 87,
  },
  {
    id: "cat-digit-market",
    icon: faBullhorn,
    title: "Digital Marketing ",
    styleClass: "cat-market",
    desc: "Master SEO, social media, and ads",
    numOfCourses: 72,
  },
  {
    id: "cat-mobile-dev",
    icon: faMobileScreen,
    title: "Mobile Development",
    styleClass: "cat-mobile",
    desc: "Build iOS and Android apps",
    numOfCourses: 64,
  },
  {
    id: "cat-cloud",
    icon: faCloud,
    title: "Cloud & DevOps",
    styleClass: "cat-cloud",
    desc: "AWS, Azure, Docker, Kubernetes",
    numOfCourses: 58,
  },
  {
    id: "cat-photo",
    icon: faCamera,
    title: "Photography ",
    styleClass: "cat-photo",
    desc: "Capture stunning images ",
    numOfCourses: 45,
  },
];

const CategorySection = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h3 className="font-semibold text-primary-600 uppercase">
            Browse Categories
          </h3>
          <p className="font-display mt-6 text-3xl font-bold lg:text-4xl">
            Explore Our Top Categories
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-500">
            Find the perfect course from our wide selection of categories taught
            by industry experts.
          </p>
          
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryData.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.title}
              icon={cat.icon}
              desc={cat.desc}
              iconStyle={cat.styleClass}
              courseNum={cat.numOfCourses}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
