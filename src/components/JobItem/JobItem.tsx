import { Item } from "./JobItem.styled";
import Skills from "./Skills";
import JobTitles from "./JobTitles";

interface Props {
  num: number;
  src: string;
  skills: string[];
  role: string;
  level: string;
  tool: string[];
  hot: boolean;
  featured: boolean;
  company: string;
  position: string;
  posted: string;
  location: string;
  contract: string;
  handleTags: (string: string) => void;
}
export default function JobItem(props: Props) {
  return (
    <Item>
      <div className="job">
        <div className="logo">
          <img src={props.src} alt="logo"></img>
        </div>
        <JobTitles
          hot={props.hot}
          featured={props.featured}
          company={props.company}
          position={props.position}
          posted={props.posted}
          location={props.location}
          contract={props.contract}
        />
      </div>
      <div className="skills">
        <Skills skills={props.role} handleTags={props.handleTags} />
        <Skills skills={props.level} handleTags={props.handleTags} />
        {props.skills.map((skill, index) => (
          <Skills skills={skill} key={index} handleTags={props.handleTags} />
        ))}
        {props.tool.map((tool, index) => (
          <Skills skills={tool} handleTags={props.handleTags} key={index} />
        ))}
      </div>
    </Item>
  );
}
