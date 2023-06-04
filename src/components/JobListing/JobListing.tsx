import JobItem from "../JobItem/JobItem";
import { StyledMain } from "./JobListing.styled";
import FilterBar from "../Filters/FilterBar";
import data from "../../../data.json";
import { useState, useEffect } from "react";

export default function JobListing() {
  interface Data {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  }

  const [filteredArray, setFilteredArray] = useState<Data[]>([]);
  const [showList, setShowList] = useState(data);
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState("");

  const filterList = () => {
    showList.map((obj: Data) => {
      const values = Object.values(obj);

      values.map((elem) => {
        if (elem === tag) {
          if (!filteredArray.includes(obj)) filteredArray.push(obj);
        }
        if (Array.isArray(elem))
          elem.map((string: string) => {
            if (string === tag) {
              if (!filteredArray.includes(obj)) filteredArray.push(obj);
            }
          });
      });
    });
  };
  const handleTags = (string: string) => {
    if (!tags.includes(string)) {
      setTags([...tags, string]);
      setTag(string);
    }
  };
  useEffect(() => {
    filterList();
    if (tags.length === 0) setShowList(data);
    if (tags.length > 0) setShowList(filteredArray);

    setFilteredArray([]);
  }, [tags]);

  return (
    <StyledMain>
      {tags.length > 0 ? <FilterBar tags={tags} setTags={setTags} /> : ""}
      {showList.map((job) => (
        <JobItem
          num={Date.now()}
          key={job.id}
          src={job.logo}
          handleTags={handleTags}
          skills={job.languages}
          role={job.role}
          level={job.level}
          tool={job.tools}
          hot={job.new}
          featured={job.featured}
          company={job.company}
          position={job.position}
          posted={job.postedAt}
          location={job.location}
          contract={job.contract}
        />
      ))}
    </StyledMain>
  );
}
