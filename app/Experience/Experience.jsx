import Experiencecard from "./Experiencecard.jsx";

export default function Experience() {
  return (
    <div className="flex gap-4 font-montserrat flex-col sm:flex-row ">
      <div className="flex animate-slideInFromLeft ">
        <Experiencecard
          image="/IT.png"
          name="IT College Assistant"
          desc="
                  I currently work at the CSI as an IT College Assistant.I am responsible for solving hardware and software issues for over 500 students
                  and staff, including I/O, network troubleshooting, and user account management. I am apart of the first line of defense when it comes to
                  resolving any problems Alongside this, I have also created a script using python for management that
                  reduced manual processing time by over 92% by sorting and aggregating excel sheets, reducing time from 4 hours to under 20 minutes per month.
                  Finally, I also have created and taught end-user support and training classes both virtually and physically.
                      "
        />
      </div>
      <div className="flex animate-slideInFromLeft ">
        <Experiencecard
          image="/csi_logo.jpg"
          name="Education"
          desc="
                  Here at CSI, I study Computer Science where 
                  my coursework consists of Data Structures and Algorithms, Computer Networking and Security, Cybersecurity, Operating Systems,
                  Computer Architecture, 
                  Artifical Intelligence & Machine Learning, and Software Engineering.
                      "
        />
      </div>
      <div className="flex animate-slideInFromRight">
        <Experiencecard
          image="/ctp.png"
          name="Data Science Bootcamp"
          desc="
                  This was a 9 month bootcamp where I learned the ins and outs of Data Science. 
                  I learned how to use Pandas, Numpy, and Matplotlib: A strong trio for data visualization.
                  I also learned how to train a Machine Learning model, and also utilize neural networks, RAG, and NLP.

                  This culminated in my Game Insightify project, 
                  
                  where I displayed all that I learned throughout the 9 months.
                      "
        />
      </div>
    </div>
  );
}
