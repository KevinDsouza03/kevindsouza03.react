import Experiencecard from "./Experiencecard.jsx";

export default function Experience() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-6 font-montserrat justify-center">
        <div className="flex animate-slideInFromLeft w-full sm:w-80 md:w-96 lg:flex-1">
          <Experiencecard
            image="/DSS-Logo.jpeg"
            name="Security Engineering Intern"
            desc={[
              'I worked under the NYC Department of Social Services, within the Office of Data Security Management where our responsibility was to ensure security policies were followed and enforced across the DSS network.',
              'Created an Ansible playbook integrated with an Azure DevOps Pipeline API to verify security compliance of our security stack, to newly provisoned Windows, RHEL, and Oracle Servers, to a network of over 15000+ hosts.',
              'Developed a Splunk dashboard for upper management based on the output of the Ansible playbook for a overview of our security compliance.',
              'Created a Splunk dashboard for remediation and overview, against our AWS environment against CIS benchmarks enabling automated compliance monitoring, remediation guidance, and improved cloud security posture.'
            ]}
          />
        </div>
        <div>
          <Experiencecard
            image="/IT.png"
            name="IT Support Assistant - College of Staten Island"
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
              'Capstone project: Game Insightify - a chatbot utilizing OpenAI API, RAG, and agents as a video game recommendation solution.'
            ]}
          />
        </div>
      </div>
    </div>
  );
}