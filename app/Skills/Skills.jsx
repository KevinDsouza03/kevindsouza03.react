import Skillscard from "./Skillscard.jsx";

const languages = [
  "https://img.shields.io/badge/C%2B%2B-gray?style=for-the-badge&logo=C%2B%2B",
  "https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&labelColor=gray&color=blue",
  "https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&labelColor=black",
  "https://img.shields.io/badge/HTML5-white?style=for-the-badge&logo=html5",
  "https://img.shields.io/badge/SQL-%23ffd7b5?style=for-the-badge&logo=mysql",
  "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white&logoWidth=20"
];

const frameworks = [
  "https://img.shields.io/badge/react-blue?style=for-the-badge&logo=react",
  "https://img.shields.io/badge/scikit-learn-orange?style=for-the-badge&labelColor=blue",
  "https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"
];

const devTools = [
  "https://img.shields.io/badge/git-gray?style=for-the-badge&logo=git",
  "https://img.shields.io/badge/VSCode-%23007ACC?style=for-the-badge&logo=visualstudio",
  "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
  "https://img.shields.io/badge/Kali_Linux-268BEE?style=for-the-badge&logo=kalilinux&logoColor=white"
];

const libraries = [
  "https://img.shields.io/badge/pandas-%2300008B?style=for-the-badge",
  "https://img.shields.io/badge/plotly-%23efefef?style=for-the-badge&logo=plotly&labelColor=gray",
  "https://img.shields.io/badge/beautifulSoup4-%23a1caf1?style=for-the-badge&logo=pypi",
  "https://img.shields.io/badge/Selenium-white?style=for-the-badge&logo=selenium&logoColor=white&labelColor=green",
];

export default function Skills() {
  return (
    <div className="flex items-stretch">
      <Skillscard name="Languages" images={languages} />
      <Skillscard name="Frameworks" images={frameworks} />
      <Skillscard name="Dev Tools" images={devTools} />
      <Skillscard name="Libraries" images={libraries} />
    </div>
  );
}
