import "./AuditionCard.scss";

const AuditionCard = ({ audition }) => {
  console.log(audition);
  return (
    <div className="audition__card-component">
      <p className="audition__info">{audition.project}</p>
      <p className="audition__info">{audition.role}</p>
      <p className="audition__info">{audition.casting}</p>
      <p className="audition__info">{audition.network}</p>
      <p className="audition__info">{audition.deadline}</p>
      <p className="audition__info">{audition.status}</p>
    </div>
  );
};

export { AuditionCard };
