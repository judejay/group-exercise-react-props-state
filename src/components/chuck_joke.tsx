interface ChuckJokeProps {
  joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = (joke) => (
  <p> {JSON.stringify(joke)}</p>
);

export default ChuckJoke;
