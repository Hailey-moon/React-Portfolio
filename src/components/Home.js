import '../style/Home.css';
import Header from './Header';
import Experience from './Experience';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Header />
            <Experience
            company="Cashmate"
            description="An iOS budgeting app built to promote fiscal responsibility by motivating users through social engagement."
            image="./static/cashmate-mockup.png"
            />
            <Experience
            company="BostonHacks 2021"
            description="One of the biggest student-run hackathons at Boston University, hosting over 260 students per year in the New England area."
            image="./static/bhacks-mockup.png"
            />
            <Experience
            company="Spark!"
            description="Graphic design internship at Boston University's leading technology innovation organization."
            image="./static/spark-mockup.png"
            />
            <Footer />
        </div>
    )
}