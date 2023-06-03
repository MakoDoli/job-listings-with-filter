import { Description } from "./JobTitles.styled";
interface Props {
  hot: boolean;
  featured: boolean;
  company: string;
  position: string;
  posted: string;
  location: string;
  contract: string;
}
export default function JobTitles(props: Props) {
  return (
    <Description>
      <div className="features">
        <div className="company">{props.company}</div>
        {props.hot ? <div className="new">NEW!</div> : ""}
        {props.featured ? <div className="featured">FEATURED</div> : ""}
      </div>
      <div className="position">{props.position}</div>
      <div className="extra">
        <p>{props.posted}</p>
        <p>.</p>
        <p>{props.contract}</p>
        <p>.</p>
        <p>{props.location}</p>
      </div>
    </Description>
  );
}
