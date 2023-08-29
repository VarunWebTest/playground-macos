import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Varun Chaudhary. I received my bachelor's degree in Information Technology
              at ABESIT GROUP OF INSTITUTIONS, Ghaziabad ,UTTAR PRADESH, INDIA.  
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Full-Stack Developer | Digital Solutions | Problem-Solver "
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm a certified Level 1 rope access Trainer and an open national footballer."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:mail@varunchaudhary.in"
                target="_blank"
                rel="noreferrer"
              >
                mail@varunchaudhary.in
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/VarunWebTest"
                target="_blank"
                rel="noreferrer"
              >
                @varunchaudhary
              </a>
            </li>
            {/* <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li> */}
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/varun-chaudhary-1028/"
                target="_blank"
                rel="noreferrer"
              >
                Varun Chaudhary
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://varunchaudhary.in"
                target="_blank"
                rel="noreferrer"
              >
                https://www.varunchaudhary.in
              </a>
            </li>
            
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
