import { Helmet } from "react-helmet-async";
import PageIntro from "/src/components/ui/PageIntro";
import CategoryCard from "/src/components/ui/CategoryCard";
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

const Categories = () => {
  return (
    <>
      <Helmet>
        <title>Categories | Learnify</title>
      </Helmet>
      <main>
        <PageIntro
          pageName="Categories"
          pageTitle="Course Categories"
          pageDesc="Find your perfect learning path from our wide selection of categories."
        />
        <div className="container flex flex-col gap-8 py-12 lg:flex-row">
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categoryData.map((cat) => (
              <CategoryCard
                path={`/courses?category=${cat.title}`}
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
      </main>
    </>
  );
};

export default Categories;
