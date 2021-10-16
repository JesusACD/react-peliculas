import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import peliculasjson from './peliculas.json';
import Paginacion from './paginacion';
import { useState } from 'react';

function App() {
	const peliculas = peliculasjson;
	const [paginaActual, setPaginaActual] = useState(1);
	return (
		<PageWrapper>
			{peliculas.map((peli) => (
				<Pelicula titulo={peli.titulo} year={peli.year} score={peli.score} release={peli.release} director={peli.director} stars={peli.stars} img={peli.img}>
					{peli.description}
				</Pelicula>
			))}
			<Paginacion
				pagina={paginaActual}
				total={4}
				onChange={(pagina) => {
					setPaginaActual(pagina);
				}}
			/>
		</PageWrapper>
	);
}

export default App;
