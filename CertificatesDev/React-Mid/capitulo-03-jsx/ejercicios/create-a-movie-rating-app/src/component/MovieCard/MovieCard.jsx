import style from "./MovieCard.module.css";
import { StarIcon } from "@heroicons/react/24/solid";

//     name: "The Godfather",
//         description:
// "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//     image:
// "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UY1982_.jpg",
//     rating: 4,
//         genres: ["Crime", "Drama"],


const MovieCard = ({ movieData }) => {
    const { id, name, description, image = '', rating = 0, genres, inTheaters = false } = movieData
    return (
        <div className={style.moviecard_container}>
            <h2 className={style.moviecard__title}>{name}</h2>
            <div className={style.image_container}>

                {inTheaters && <p className={style.moviecard__intheaters}>In Theaters</p>}
                {image ? <img src={image} alt={name} className={style.image_size} /> : <p className={`${style.image_size} ${style.no_image_text}`}>Sin imagen</p>}
                <div className={style.star_icon} >
                    <StarIcon fill={rating > 0 ? "yellow" : "gray"} />
                </div>
            </div>
            <p className={style.moviecard__description}>{description}</p>
            <h3 className={style.moviecard__rating}>Rating</h3>
            {"⭐".repeat(rating)}
            <h3 className={style.moviecard__genre}>Genre</h3>
            <ul>
                {genres.map((genre, index) => (
                    <li key={`movie-genre-${id}-${index}`}>{genre}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCard;
