import { StyledFilters, StyledTag } from "./FilterBar.styled";
import close from "../../../public/images/icon-remove.svg";

interface Props {
  tags: string[];
  setTags: (array: string[]) => void;
}
export default function FilterBar(props: Props) {
  return (
    <StyledFilters>
      <div className="tags">
        {props.tags.map((tag, index) => (
          <StyledTag key={`${tag}${index}`}>
            <div className="tag">
              <p>{tag}</p>
            </div>
            <div className="close">
              <img
                src={close}
                alt="close"
                onClick={() => {
                  const updatedTags = props.tags.filter((_, tagIndex) => {
                    return tagIndex !== index;
                  });
                  props.setTags(updatedTags);
                }}
              ></img>
            </div>
          </StyledTag>
        ))}
      </div>
      <div onClick={() => props.setTags([])} className="clear">
        clear
      </div>
    </StyledFilters>
  );
}
