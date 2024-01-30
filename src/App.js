import "./App.css";
import Feedback from "./Feedback";
import Header from "./Header";
import Movie from "./Movie";
import { imdbs } from "./Imdb";
const movies = [
  {
    name: "Forever",
    genre: "Detective",
    creator: "Matthew Miller",
    description:
      "Dr Henry Morgan, a medical examiner, works with his partner Detective Jo Martinez, to solve criminal cases. Along the way, he tries to uncover the mystery to his 200-year-old immortality.",
    img: "https://m.media-amazon.com/images/M/MV5BMTQzMTUwMjQ3Nl5BMl5BanBnXkFtZTgwMTY2MDE5MjE@._V1_.jpg",
  },
  {
    name: "Wonder",
    genre: "Drama, Family",
    creator: "Matthew Miller",
    description:
      "Based on the New York Times bestseller, this movie tells the incredibly inspiring and heartwarming story of August Pullman, a boy with facial differences who enters the fifth grade, attending a mainstream elementary school for the first time.",
    img: "https://m.media-amazon.com/images/M/MV5BYjFhOWY0OTgtNDkzMC00YWJkLTk1NGEtYWUxNjhmMmQ5ZjYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
  },
  {
    name: "Stranger Things",
    genre: "Drama, Fantastic",
    creator: "Matt Duffer",
    description:
      "The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    img: "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/07/11/Pictures/_afa6f3e2-471c-11e6-90e0-482a513bad8b.png",
  },
];
const headerInfo = {
  cinema: "28 Mall",
  name: "Diamond hall",
  address: "28 May",
  rating: "9.8",
};

const feedbacks = [
  {
    movieName: "Forever",
    comment: "Awesome!",
  },
  {
    movieName: "Wonder",
    comment: "Really good!",
  },
  {
    movieName: "Stranger Things",
    comment: "Fantastic!",
  },
  {
    movieName: "Forever",
    comment: "The best detective movie!",
  },
];

function App() {
  const imdbRatings = imdbs.reduce((acc, imdb) => {
    acc[imdb.movieName] = imdb.rate;
    return acc;
  }, {});

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Header headerInfo={headerInfo}></Header>
      </div>
      <div style={{ display: "flex" }}>
        {movies.map((m) => (
          <Movie
            key={m.name}
            size={100}
            movie={m}
            imdbRating={imdbRatings[m.name] || "Rating not available"}
          ></Movie>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        {feedbacks.map((f) => (
          <Feedback
            key={f.movieName + f.comment}
            size={100}
            feedback={f}
          ></Feedback>
        ))}
      </div>
    </div>
  );
}

export default App;
