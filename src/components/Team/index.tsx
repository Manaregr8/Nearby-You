// src/components/Team/index.tsx
import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";
import Link from "next/link";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Manjeet Singh",
    designation: "Founder / Web Developer",
    image: "/images/team/Manjeet_Singh.jpg",
    linkedinLink: "https://www.linkedin.com/in/manaregr8/",
    githubLink: "https://github.com/Manaregr8",
  },
  {
    id: 2,
    name: "Divyam Sharma",
    designation: "Software Developer",
    image: "/images/team/Divyam_Sharma.jpg",
    linkedinLink: "https://www.linkedin.com/in/divyam-sharma-6ba700249/",
    githubLink: "https://github.com/Divyamsharma-18",
  },
  {
    id: 3,
    name: "Sayan Rakshit",
    designation: "Software Developer",
    image: "/images/team/Sayan_Rakshit.jpg",
    linkedinLink: "https://www.linkedin.com/in/sayandotcom/",
    githubLink: "https://github.com/devsayanR",
  },
];

const Team = ({ showAll }: { showAll: boolean }) => {
  const visibleTeam = showAll ? teamData : teamData.slice(0, 4);

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Meet our passionate team driving innovation and excellence."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {visibleTeam.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>

        {/* Show the button only if not showing all members */}
        {!showAll && (
          <div className="flex justify-center mt-8">
            <Link href="/about">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-md">
                Show More
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
