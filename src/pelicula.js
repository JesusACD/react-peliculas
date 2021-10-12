export default function Pelicula(props) {
	const { titulo, year, score, children, release, director, stars, img } = props;

	return (
		<div className="movie-item-style-2">
			<img src={img} alt="" />
			<div className="mv-item-infor">
				<h6>
					<a href="moviesingle.html">
						{titulo} <span>({year})</span>
					</a>
				</h6>
				<p className="rate">
					<i className="ion-android-star"></i>
					<span>{score}</span> /10
				</p>
				<p className="describe">{children}</p>
				<p className="run-time">
					{' '}
					Run Time: 2h21’ . <span>MMPA: PG-13 </span> . <span>Release: {release}</span>
				</p>
				<p>
					Director: <a href="#">{director}</a>
				</p>

				<p>
					Stars:{' '}
					{stars.map((item) => {
						return <a href="#">{item}, </a>;
					})}
				</p>
			</div>
		</div>
	);
}
