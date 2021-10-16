export default function Paginacion(props) {
	const { pagina, total, onChange } = props;

	const getPaginas = () => {
		const resultado = [];
		for (let i = 0; i < total; i++) {
			let pagin = i + 1;
			resultado.push(
				<a onClick={() => props.onChange(pagin)} className={pagina === pagin ? 'active' : ''}>
					{pagin}
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
