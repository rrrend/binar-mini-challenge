import axios from 'axios';
import styles from './index.module.css';

const item = ({ name, url }) => {
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setPokemon(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.pokemon}>
      <img
        src="/bulbasaur.png"
        alt="bulbasaur"
      />
      <div style={{ width: 115 }}>
        <div className={`${styles.pokemonText} ${styles.pokemonTextSpace}`}>Bulbasaur</div>
        <div className={styles.pokemonText}>#001</div>
      </div>
      <div>
        <img
          className={styles.typeSpace}
          src="/grass.png"
          alt="grass"
        />
        <img
          src="/poison.png"
          alt="poison"
        />
      </div>
    </div>
  );
};

export default item;
