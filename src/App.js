import "./styles.css";
import CarouselImage from "./CarouselImage";
import Navbarfunction from "../src/navbar";
import Welcome from "./welcome";
import Grid from "./grid";
import Heading from "./headings";
import Paragraph from "./paragraph";
import Bullet from "./bullets";
import Faculty from "./faculty";
import Passportsizemale from "./images/passport size image.jpg"
import Imageofgallery from "./imageofgallery";
import Content from "./content";
import Subheading from "./Subheading";
import Passportsizefemale from "./images/passport size female.jpg";
import Contact from "./contact";
import Contactform from "./contactform";
import Maps from "./maps";
import Sports from "./images/sports.jpg";
import Projects from "./images/projects.jpg";
import Cultural from "./images/cultural fest.jpg";
import Library from "./images/library.jpg";
import Classroom from "./images/classroom.jpg";
import Youtube from "./youtube";
export default function App() {
  return (
    <div className="App">
    <div  id="HomePage">
    <Navbarfunction/>
     <Welcome/>
      <CarouselImage/>
    </div>
  <div id="AboutUs" href="aboutus">
<Heading value="About us"/>

    <div className="divforgrid">
     <Grid heading="History" para="Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."/>
     <Grid heading="Vision" para="To create a learning environment that fosters academic excellence, critical thinking, and ethical values."/>
     <Grid heading="Mission" para="To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."/> 
     </div>
  <Paragraph value="At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.-{PrincipleNAme}"/>
   <div className="unorderedlist">
   <Bullet value="State-of-the-art science and computer labs 🧪💻"/>
    <Bullet value="Spacious and well-equipped classrooms 🏫"/>
    <Bullet value="Library with a vast collection of books and digital resources 📚📱"/>
    <Bullet value="Sports facilities including a playground, gymnasium, and swimming pool 🏟️🏋️‍♂️🏊‍♀️"/>

   </div> 
    </div>
    <div id="Academics">
    <Heading value="Academics"/>
    <div className="divforgrid">
    <Grid heading="Primary (Grades 1-5)" para="English, Mathematics, Science, Social Studies, Art, Physical Education"/>
    <Grid heading="Secondary (Grades 6-10)" para="English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art"/>
    <Grid heading="Senior Secondary (Grades 11-12)" para={<><b>Science Stream:</b> Physics, Chemistry, Biology, Mathematics, Computer Science, English
      <br /><b>Commerce Stream:</b> Accountancy, Business Studies, Economics, Mathematics, English</>} />
    <Grid heading="Teaching Methodologies" para="We use a blend of traditional and modern teaching techniques to cater to different learning styles."/>
    <Grid heading="Educational Resources" para="Digital classrooms, interactive learning modules, and access to online educational platforms."/>
    </div>

    </div>
    <div id="Admissions">
    <Heading value="Admissions"/>
    <Bullet value={<><b>Process:</b> Admission forms are available for download. Submit the completed form along with required documents at the school office.</>}/>
    <Bullet value={<><b>Criteria:</b> Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</>}/>
    <Bullet value={<><b>Important Dates:</b> 
    <ul >
      <li className="blink">Admission Form Availability: March 1st</li>
      <li className="blink">Last Date for Submission: March 31st</li>
      <li className="blink">Entrance Test: April 15th</li>
      <li className="blink">Announcement of Results: April 30th</li>
    </ul>

</>}/>
   
    </div>
    <div id="Faculty">
    <Heading value="Faculty"/>
    <div  className="facultydivgrid">
    <Faculty url={Passportsizemale} name="John Doe" designation="Principal, M.Ed, 20 years of experience in educational administration."/>
    <Faculty url={Passportsizemale}  name="Jane Smith" designation=" Vice Principal, M.Sc. in Physics, 15 years of teaching experience."/>
    <Faculty url={Passportsizefemale} name="Emily Johnson" designation="English Teacher, M.A. in English, 10 years of teaching experience."/>
    <Faculty url={Passportsizemale} name="Michael Brown" designation=" Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience."/>
    <Faculty url={Passportsizefemale} name="Sophia Davis" designation="Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience."/>
    <Faculty url={Passportsizemale} name="David Wilson" designation="Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience."/>
   
    </div>
    
    </div>
    <div id="Students">
<Heading value="Students"/>
<Subheading value="Life at Springdale:"/>
<Content  para={<>
<h5 className="contentheading">Extracurricular Activities:</h5> Music, Dance, Drama, Art, Sports, 🤖 Robotics, 🗣️ Debate Club, 🧬 Science Club
<h5 className="contentheading">Clubs and Societies:</h5> 📖 Literary Society, 🌳 Environmental Club, 🔭 Astronomy Club, 💻 Coding Club</>}/>
<Subheading value="Achievements"/>
<Faculty url={Passportsizemale} name="John Smith" designation="National Level Math Olympiad Winner"/>
<Faculty url={Passportsizefemale} name="Sarah Lee " designation="Gold Medalist in State Swimming Championship"/>
<Faculty url={Passportsizemale} name="Tech Innovators Club" designation="Winners of Inter-School Robotics Competition"/>
<Subheading value="Student Council"/>
<Faculty url={Passportsizefemale} name="President" designation=" Amy Parker, Grade 12"/>
<Faculty url={Passportsizemale} name="Vice President" designation="Gold Medalist in State Swimming Championship"/>
<Faculty url={Passportsizefemale} name="Secretary" designation="Lisa Wong, Grade 10"/>

    </div>
    <div id="Gallery">
<Heading value="Gallery"/>
<div className="galleryimages">
<Imageofgallery url={Sports}/>
<Imageofgallery url={Cultural}/>
<Imageofgallery url={Projects}/>
<Imageofgallery url={Library}/>
<Imageofgallery url={Classroom}/>
<Imageofgallery url={Library}/>

</div>
<Subheading value="Check out our school tour 🏫 and the latest cultural fest 🎉!"/>
<Youtube url="https://www.youtube.com/embed/HiwnB2aV7P0?si=7E7dtIMRoM-9XrQe"/>
<Youtube url="https://www.youtube.com/embed/xvWnpxnZ_Ww?si=rBdvMOzF_hsGnsuP"/>
    </div>

    <div id="ContactUs">
    <Heading value="Contact us"/>
   <div className="contactandcontactform">
 
   <Contact address={<><b>Address:</b>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</>} phonenumber={<><b>Phonenumber:</b>+1 (123) 456-7890</>} email={<><b>Email ID</b>info@springdale.edu</>}/>
   <Contactform/>
   </div> 
<Maps/>
    </div>
   </div>
  );
}
