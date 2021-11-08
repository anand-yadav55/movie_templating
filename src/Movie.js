import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function Movie(props) {
  const [data, setData] = useState(0);
  const { movieName } = useParams();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${movieName}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);
  return data ? (
    <div className="movie">
      <div className="searchTerm">Searched: {movieName.toUpperCase()}</div>
      {data.map((item) => {
        return (
          <div className="movieList">
            <div className="title">{item.show.name}</div>
            <div className="MovieDetail">
              <div className="showImage">
                <img
                //   src={item.show.image.medium || item.show.image.original || ''}
                />
              </div>
              <div className="smallDetail">
                <div className="ratings">
                  <span className="Average Rating">
                    Average Rating: {item.show.rating.average}
                  </span>
                </div>

                <div className="genre">
                  {item.show.genres.map((item, i) => {
                    return (
                      <div key={i} className="genreItem">
                        {item}
                      </div>
                    );
                  })}
                </div>
                <div className="language">{item.show.language}</div>
                <div className="type">{item.show.type}</div>
                <div className="premiered">{item.show.premiered}</div>
                <div className="runtime">Runtime: {item.show.runtime}</div>
                <div className="watchLink">
                  <a href={item.show.url} className="watchNow">
                    <button>Watch Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="error">Not found</div>
  );
}
