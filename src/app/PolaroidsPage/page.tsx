// src/app/PolaroidsPage/page.tsx

import Link from "next/link";
import Polaroids from "../components/Polaroids/Polaroids";
import Sponsors from "../components/Polaroids/Sponsors";

const judges = [
  {
    name: "Morgan Young",
    title: "Founder & Creator @ That LinkedIn Girl",
    intro:
      "Morgan Young is a product manager, nonprofit founder, and creator with an audience base of over 90K, and 26M+ views on social media. She has been recognized for her content focusing on college, early careers, personal branding, and young people in the workforce, being named a LinkedIn Top Voice Next Gen, WayUp's Top Intern of 2023, and featured in The Wall Street Journal, Business Insider, NPR, and Fast Company as well as her efforts as a passionate advocate for women in innovation-focused fields, and role model in the state of Nevada as Miss Clark County.",
    link: "/morgan-young.png",
  },
  {
    name: "Rian Corcino",
    title: "Founder @ Synergy",
    intro:
      "Rian is a 2x Microsoft intern, the Founder of Synergy⚡, and a 15K+ influencer. In 2024, he competed in 15+ hackathons—winning 6—and built Synergy, an AI team-matching platform for hackathons like HackUTD, Brainrot Hack, and this one! As a content creator, Rian shares his (goofy) journey on software engineering and hackathons. He loves traveling the country for tech events, learning Duolingo, and drinking brown sugar boba. ✨",
    link: "/rian-corcino.jpg",
  },
  {
    name: "Nikita Chepuri",
    title: "Product Manager @ Microsoft",
    intro:
      "Nikita Chepuri is a Product Manager at Microsoft, LinkedIn content creator, and mentor passionate about innovation and talent development. Nikita is dedicated to helping others and has mentored over 1,000 interns and shares career tips, resources, and job opportunities on LinkedIn to empower Gen Z in the job market.",
    link: "/nikita-chepuri.png",
  },
  {
    name: "Ellen Guo",
    title: "Trader @ Jane Street",
    intro:
      "Ellen (they/them) (SEAS '24) is a trader at Jane Street; prior they've done software engineering internships at a blockchain startup, Meta, and Jane Street. At Columbia, they helped run Devfest '23 and '24 and are super excited to be back! For fun, Ellen likes to read, play board games, and watch livestreams of their family's chickens back in California.",
    link: "/ellen-guo.jpeg",
  },
  {
    name: "Dhwani Khatter",
    title: "National Channel Systems Engineer @ Palo Alto Networks",
    intro:
      "Dhwani Khatter is a National Channel Systems Engineer for Palo Alto Networks. She has been with the company for nearly 5 years and previously worked as a System Engineer for commercial accounts in New York and New England. Dhwani has her undergraduate degree in Computer Science from the University of Colorado Boulder with a focus in Cybersecurity. She now resides in New York City and is focusing on exclusively supporting the CDW business as their largest partner.",
    link: "/dhwani-khatter.jpg",
  },
  {
    name: "Eliam Medina",
    title: "Cofounder @ Telora & Willing",
    intro:
      "Eliam (Columbia '07) was the cofounder of Willing (YC, Founders Fund, acquired by MetLife). He is now the cofounder of Telora, a fellowship that helps hackers start startups.",
    link: "/eliam-medina.png",
  },
  {
    name: "Lily Ke",
    title: "SWE @ Meta",
    intro:
      "Lily Ke is a software engineer at Meta with over three years of experience in the Ads department, focusing on front-end development across Instagram, Facebook, and Messenger. She holds a Bachelor's degree in Computer Science from the University of Illinois at Urbana-Champaign (UIUC) and a Master's degree in Computer Science and Engineering from Harvard University. Lily specializes in Artificial Intelligence, Machine Learning, and User Experience, with a research background in differential privacy, distributed systems, and large-scale machine learning optimization. She has published five papers in prestigious conferences, including ACM SoCC, ICML TPDP, and AAAI, and actively contributes as a reviewer for top conferences such as DMBD and TOIT. Beyond her professional work, she is a passionate mentor, hackathon judge, and speaker, dedicated to sharing insights on impactful product development and career growth in tech.",
    link: "lily-ke.jpg",
  },
  {
    name: "Abhishek Chaudhary",
    title: "ML Research Engineer @ S&P Global",
    intro:
      "Abhishek (SEAS '24) is an ML Research Engineer at S&P Global, where he focuses on forecasting corporate bond issuance. Previously, he worked on many different Computer Vision applications and co-authored a patent on Graph Visualization. Outside of work, Abhishek enjoys hosting dinner parties and playing beach volleyball. As a former ADI Devfest team member, he’s thrilled to see the innovative projects participants will create this year.",
    link: "abhishek-chaudhary.JPG",
  },
  {
    name: "Dimple Bhanushali",
    title: "Doctoral AI-Fashion Supply Chain Scientist",
    intro:
      "With over 12 years of experience in financial planning, supply chain optimization, and sustainability, Dimple Bhanushali brings a unique blend of strategic and operational expertise, supported by three master’s degrees in Supply Chain Management, Finance, and Business Administration. Her work spans the fashion and beauty industries, where she leverages AI and supply chain innovations to drive efficiency and advance sustainable practices. Currently pursuing a doctorate in AI-driven supply chain management, her focus lies on automation, wearable technology, and reducing environmental impact within the fashion industry. She is passionate about developing innovative solutions that integrate technology and sustainability to build a more efficient and responsible future.",
    link: "dimple-bhanushali.jpeg",
  },
  {
    name: "Ciara Cade",
    title: "Founder @ The Tech Cadets",
    intro:
      "Ciara Cade is a startup entrepreneur, professional development LinkedIn creator, and aspiring software engineer studying Computer Science at the University of Michigan. A recipient of the 2024 WayUp Top Intern Award, she has completed impactful SWE internships at Uber and Capital One. Through her platform, she empowers others to secure internships and opportunities in tech. Ciara is the founder of The Tech Cadets, a 3,200+ member community helping technologists build side projects and launch careers. Her work, on and off campus, focuses on advancing underrepresented groups in tech and has been recognized by organizations like OpenAI, the National Society of Black Engineers, and Black Tech Saturdays.",
    link: "/ciara-cade.jpg",
  },
  {
    name: "Natan Vidra",
    title: "Founder/CEO @ Anote",
    intro:
      "Natan Vidra is the Founder / CEO of Anote. Natan has experience working as a Data Scientist / Software Engineer within Deloitte's Applied Artificial Intelligence division. At Deloitte, Natan collaborated on many AI projects in the domains of Natural Language Processing, Computer Vision and Big Data Analytics. He wrote the Deloitte Prompt Engineering Guide, and led execution for Ready AI, enabling clients to practically go from zero to one on their AI journeys. Natan loves building things. He has spent over 10,000 hours building AI projects such as AI fantasy soccer optimization models, reinforcement learning systems for robots, autonomous trash picking robots, AI generated music, music recommender systems, NLP solutions for document classification, avionic software systems on rockets, and federated learning products for medical images. Natan graduated from Cornell University with a Bachelors of Science in Electrical and Computer Engineering, and a Masters of Engineering in Computer Science.",
    link: "natan-vidra.png",
  },
  {
    name: "Victor Wang",
    title: "Sr. User Experience Designer @ JPMorgan Chase",
    intro:
      "Victor is a product designer with experience in creating B2B and B2C mobile interfaces. His expertise includes responsive designs, design system visual uplift, data visualization, and best practice documentations. In this talk, he will challenge the idea of 'less is more' in UX and will demonstrate how thoughtfully implemented complexities could bridge the gap between visual appeal and functionality, along with insights on different approaches, tools and design methodologies to achieve design excellence.",
    link: "/victor-wang.png",
  },
  {
    name: "Peiyu Wang",
    title: "Security Reseracher @ CertiK",
    intro:
      "Peiyu Wang is a Security Researcher at CertiK, specializing in Web3 application penetration testing, smart contract audits, and security research. With over six years of experience in cybersecurity, he has conducted assessments on crypto exchanges, decentralized applications, wallets, and DeFi protocols, helping secure hundreds of clients in the blockchain space. Before joining CertiK, Peiyu worked as a security consultant at NCC Group and Harbor Labs, focusing on software development and security assessments. He holds a master’s degree in Information Security from Johns Hopkins University and professional certifications, including Offensive Security Certified Professional (OSCP) and Offensive Security Web Expert (OSWE).",
    link: "/peiyu-wang.png",
  },
  {
    name: "Andrea Clark",
    title: "PHD Researcher @ Columbia University",
    intro:
      "Andrea is a PhD student under the supervision of Dr. Ansaf Salleb Aoussi, focusing on the intersection of interpretable machine learning and causal inference. Her research aims to develop more transparent and explainable AI systems while uncovering meaningful causal relationships in data, focusing on reducing bias in predictive medical models. When she's not working, you can find her enjoying a good film, playing soccer with friends, or exploring the city on her bike.",
    link: "/andrea-clark.jpg",
  },
];

const sponsors_gold = [
  {
    name: "Modal Labs",
    link: "modal-logo.webp",
  },
];
const sponsors_silver = [
  {
    name: "Microsoft",
    link: "/microsoft-logo.png",
  },
  {
    name: "Jane Street",
    link: "/jane-street-logo.png",
  },
  {
    name: "Groq",
    link: "/groq-logo.png",
  },
  {
    name: "Telora",
    link: "/telora-logo.jpeg",
  },
  {
    name: "Memenome",
    link: "/memenome-logo.png",
  },
];

const sponsors_bronze = [
  {
    name: "Verbwire",
    link: "/verbwire-logo.png",
  },
  {
    name: "Warp",
    link: "/warp-logo.png",
  },
  {
    name: "Anote",
    intro: "intro 5",
    link: "anote-logo.png",
  },
];

export default function PolaroidsPage() {
  return (
    <div className="p-8">
      <div>
        {/* Force text color to black */}
        <div className="text-4xl text-center text-black">
          Judges and Speakers
        </div>
        <div className="grid grid-cols-1 gap-10 p-5 justify-center sm:grid-cols-5">
          {judges.map((judge, index) => (
            <Polaroids
              key={`judge-${index}`}
              name={judge.name}
              title={judge.title} // Pass the title to the Polaroids component
              intro={judge.intro}
              link={judge.link}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center md:items-start">
        <div className="text-4xl self-center text-black">Sponsors</div>

        <div className="mt-8 text-2xl text-black">Gold Sponsors</div>
        <div className="grid grid-cols-1 gap-10 p-5">
          {sponsors_gold.map((sponsor, index) => (
            <Sponsors key={`sponsor-${index}`} link={sponsor.link} />
          ))}
        </div>

        <div className="mt-4 text-2xl text-black">Silver Sponsors</div>
        <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-5">
          {sponsors_silver.map((sponsor, index) => (
            <Sponsors key={`sponsor-${index}`} link={sponsor.link} />
          ))}
        </div>

        <div className="mt-4 text-2xl text-black">Bronze Sponsors</div>
        <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-3">
          {sponsors_bronze.map((sponsor, index) => (
            <Sponsors key={`sponsor-${index}`} link={sponsor.link} />
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col">
        <div className="text-4xl text-center text-black">
          Special thanks to StandOut Stickers
        </div>
        <Link
          className="flex flex-col align-middle"
          href="http://hackp.ac/mlh-StandOutStickers-hackathons"
        >
          <img
            src="/standout-stickers.png"
            className="w-2/5 mt-8 self-center"
          />
        </Link>
      </div>
    </div>
  );
}
