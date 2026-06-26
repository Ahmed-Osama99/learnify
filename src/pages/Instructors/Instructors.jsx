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
            </main>
        </>
    )
}

export default Instructors