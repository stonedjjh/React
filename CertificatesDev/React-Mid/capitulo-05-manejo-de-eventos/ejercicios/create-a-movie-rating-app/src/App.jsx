import { ALL_MOVIES } from "./data/movies";
import MovieItem from "./components/MovieItem";
import Modal from "./components/ui/Modal";
import MovieForm from "./components/MovieForm";

export default function App() {
  const movies = ALL_MOVIES.items;
  const showMovieForm = true;
  const currentMovie = ALL_MOVIES.items[0]; // Edit this to ALL_MOVIES.items[0] to simulate editing a movie

  const handleSubmit = (event) => {
    event.preventDefault();
    let jsonData = {}
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const description = formData.get('description');
    const image = formData.get('image');
    const genres = formData.getAll('genresSelected');
    const inTheaters = formData.get('inTheaters');
    jsonData = { ...jsonData, name, description, image, genres, inTheaters };
    console.log(jsonData);
    return jsonData;
  }

  const onCancel = (event) => {
    const form = document.getElementById("movieForm");
    form.name.value = '';
    form.description.value = '';
    form.image.value = '';
    form.genresSelected.value = [];
    form.inTheaters.value = false;
  }


  return (
    <div className="app">
      <Modal
        isOpen={showMovieForm}
        title={currentMovie?.id ? "Edit Movie" : "Add Movie"}
      >
        <MovieForm movie={currentMovie} actions={{ handleSubmit: handleSubmit, onCancel: onCancel }} />
      </Modal>
      <div className="movie-list">
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
