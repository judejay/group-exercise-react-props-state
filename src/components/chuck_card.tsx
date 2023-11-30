import ChuckImage from "../assets/chuck_norris.jpg";

interface ChuckCardProps {
  Heading: string;
}

const ChuckCard: React.FC<ChuckCardProps> = ({ Heading }) => {
  return (
    <>
      <h2>{Heading}</h2>

      <img src={ChuckImage} alt="A handsome man" />
    </>
  );
};

export default ChuckCard;
