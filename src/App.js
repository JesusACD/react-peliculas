import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import peliculasjson from './peliculas.json';
import Paginacion from './paginacion';

function App() {
	const peliculas = peliculasjson;
	return (
		<PageWrapper>
			{peliculas.map((peli) => (
				<Pelicula titulo={peli.titulo} year={peli.year} score={peli.score} release={peli.release} director={peli.director} stars={peli.stars} img={peli.img}>
					{peli.description}
				</Pelicula>
			))}
			<Paginacion
				pagina={2}
				total={4}
				onChange={(pagina) => {
					alert(pagina);
				}}
			/>
		</PageWrapper>
	);
}

export default App;
