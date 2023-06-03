/* eslint-disable react-refresh/only-export-components */
import { StyledTag } from "../Filters/FilterBar.styled";

interface Props {
  skills: string;
  handleTags: (string: string) => void;
}
export default function Skills(props: Props) {
  return (
    <StyledTag>
      <div className="tags">
        <div className="tag">
          <p onClick={() => props.handleTags(props.skills)}>{props.skills}</p>
        </div>
      </div>
    </StyledTag>
  );
}
