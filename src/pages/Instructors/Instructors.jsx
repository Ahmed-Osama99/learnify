import { Helmet } from "react-helmet-async"
import PageIntro from "/src/components/ui/PageIntro"
import InstructorCard from "/src/components/ui/InstructorCard"
import { useEffect, useState } from "react"
import { getAllInstructors } from "/src/services/instructorService"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const getInstructors = async () => {
        try {
        const data = await getAllInstructors();
        setInstructors(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setIsLoading(false);
        }
    };

    getInstructors();
    }, []);
    return(
        <>
            <Helmet>
                <title>Instructors | Learnify</title>
            </Helmet>
            <main>
                <PageIntro
                    pageName="Instructors"
                    pageTitle="Meet Our Instructors"
                    pageDesc="Learn from industry experts working at top companies like Google, Netflix, Airbnb, and AWS."
                />
                <div className="container">
                    {isLoading && (
                        <p className="my-10 text-center text-xl font-bold">
                            Loading Instructors...
                        </p>
                    )}
                    {error && (
                        <p className="my-10 text-center text-xl font-bold">Error: {error}</p>
                    )}
                    <div className="my-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {instructors &&
                            instructors.map((instructor) => (
                            <InstructorCard key={instructor.id} instructor={instructor} />
                        ))}
                    </div>
                </div>
                <div className="text-center py-10 bg-primary-600">
                        <h3 className="font-display mt-6 text-3xl font-bold lg:text-4xl text-white">Become an Instructor</h3>
                        <p className="mx-auto max-w-2xl text-white mt-4">
                            Share your knowledge with millions of students around the world. Join our community of expert instructors.
                        </p>
                        <Link to="/" className="cta-btn w-fit mx-auto mt-6">
                            Start Learning Free
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                </div>
            </main>
        </>
    )
}

export default Instructors