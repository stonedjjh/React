const genres = [
  "Drama",
  "Crime",
  "Action",
  "Comedy",
  "Thriller",
  "Horror",
  "Sci-Fi",
  "Fantasy",
  "Romance",
];

export default function MovieForm({ movie, actions }) {
  const { handleSubmit, onCancel } = actions;

  return (
    <form id="movieForm" onSubmit={handleSubmit} >
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="name" name="name" defaultValue={movie?.name || ""} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" name="description" defaultValue={movie?.description || ""} />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input type="text" id="image" name="image" defaultValue={movie?.image || ""} />
      </div>
      <div>
        <label htmlFor="genresSelected">Genres</label>
        <select multiple id="genresSelected" name="genresSelected" defaultValue={movie?.genres || []} >
          {
            genres.map(genre => (
              <option key={genre} defaultValue={genre}>
                {genre}
              </option>
            ))
          }
        </select>
      </div>
      <div>
        <label htmlFor="inTheaters">In Theaters</label>
        <input type="checkbox" id="inTheaters" name="inTheaters" />
      </div>
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel} >Cancel</button>

    </form>
  );
}
