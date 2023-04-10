import { AuditionCard } from "../AuditionCard/AuditionCard";
import "./AuditionList.scss";

const AuditionList = ({ auditionData }) => {
  return (
    <div className="audition-list__component">
      <div className="audition-list__label">
        <p className="audition-list__label-item">Project</p>
        <p className="audition-list__label-item"> Role</p>
        <p className="audition-list__label-item">Casting</p>
        <p className="audition-list__label-item">Network</p>
        <p className="audition-list__label-item">Deadline</p>
        <p className="audition-list__label-item">Status</p>
      </div>
      {auditionData.map((audition) => {
        return <AuditionCard audition={audition} />;
      })}
    </div>
  );
};
export { AuditionList };
