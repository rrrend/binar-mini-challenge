import styles from './App.module.css';
import Item from './Item';
import { POKEMON_URL } from './constants';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(POKEMON_URL);
      setPokemon(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.title}>kanto pokedex</div>
      <div className={`${styles.title} ${styles.titleSpace}`}>1-150</div>
      <div className={styles.container}>
        {pokemon.map((item) => {
          console.log(item);
          return (
            <Item
              name={item.name}
              url={item.url}
              key={item.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
