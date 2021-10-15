export default function Paginacion(props) {
	const { pagina, total, onChange } = props;

	const getPaginas = () => {
		const resultado = [];
		for (let i = 1; i < total + 1; i++) {
			resultado.push(
				<a onClick={onChange} className={pagina === i ? 'active' : ''} href="#">
					{i}
				</a>
			);
		}
		return resultado;
	};
	return (
		<div className="topbar-filter">
			<div className="pagination2">
				<span>
					Pagina {pagina} de {total}:
				</span>
				{/* {Array.apply(0, Array(total)).map((value) => (
					<a className="active" href="#">
						{value}
					</a>
				))} */}
				{getPaginas()}
			</div>
		</div>
	);
}
