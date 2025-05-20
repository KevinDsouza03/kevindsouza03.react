import Experiencecard from "./Experiencecard.jsx";

export default function Experience() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-6 font-montserrat justify-center">
        <div className="flex animate-slideInFromLeft w-full sm:w-80 md:w-96 lg:flex-1">
          <Experiencecard
            image="/IT.png"
            name="IT College Assistant"
            desc={[
              'Provide hardware and software support for over 500 students and staff, including I/O issues, network troubleshooting, and user account management.',
              'Serve as first line of defense for resolving technical problems.',
              'Developed a Python script for management by automating Excel sheet processing, reducing manual processing time by over 92% (from 4 hours to under 20 minutes per month).',
              'Created and conducted end-user support and training sessions, both virtually and in person.'
            ]}
          />
        </div>
          
        <div className="flex animate-slideInFromLeft w-full sm:w-80 md:w-96 lg:flex-1">
          <Experiencecard
            image="/csi_logo.jpg"
            name="Education"
            desc={[
              'Studying Computer Science at CSI.',
              'Coursework includes:',
              ' Data Structures and Algorithms',
              ' Computer Networking and Security',
              ' Cybersecurity - PenTest+',
              ' Operating Systems',
              ' Computer Architecture',
              ' Artificial Intelligence & Machine Learning',
              ' Software Engineering',
            ]}
          />
        </div>
          
        <div className="flex animate-slideInFromRight w-full sm:w-80 md:w-96 lg:flex-1">
          <Experiencecard
            image="/ctp.png"
            name="Data Science Bootcamp"
            desc={[
              'Completed a 9-month Data Science Bootcamp.',
              'Gained hands-on experience with Pandas, Numpy, and Matplotlib for data visualization.',
              'Trained Machine Learning models and explored neural networks, RAG, and NLP.',
              'Capstone project: Game Insightify - a chatbot utilizing skills from '
            ]}
          />
        </div>
      </div>
    </div>
  );
}