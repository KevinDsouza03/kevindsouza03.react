import Experiencecard from "./Experiencecard.jsx";

export default function Experience() {
  return (
    <div className="flex gap-4 font-montserrat">
      <div className="animate-slideInFromLeft">
        <Experiencecard
          image="/csi_logo.jpg"
          name="Education"
          desc="
                  Here at CSI, I study Computer Science and also work in IT as a College Assistant for the college. 
                  My coursework consists of Data Structures and Algorithms, Computer Networking, Operating Systems, Computer Architecture, 
                  Artifical Intelligence & Machine Learning, and Software Engineering.
                      "
        />
      </div>
      <div className="animate-slideInFromRight">
        <Experiencecard
          image="/ctp.png"
          name="Data Science Bootcamp"
          desc="
                  This was a 9 month bootcamp where I learned the ins and outs of Data Science. 
                  I learned how to use Pandas, Numpy, and Matplotlib: A strong trio for data visualization.
                  I also learned how to train a Machine Learning model, and also use neural networks, RAG, and NLP

                  This culminated in my Game Insightify project, 
                  
                  utilizing the skills I learned here.
                      "
        />
      </div>
    </div>
  );
}
