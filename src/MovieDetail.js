import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

export default function MovieDetail() {
  const [data, setData] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return data ? (
    <div className="movieDetailPage">
      <div className="title">{data.name}</div>
      <div className="MovieDetail">
        <div className="showImage">
          <img src={data.image.medium} />
        </div>
        <div className="smallDetail">
          <div className="ratings">
            <span className="Average Rating">
              Average Rating: {data.rating.average}
            </span>
          </div>

          <div className="genre">
            {data.genres.map((item, i) => {
              return (
                <div key={i} className="genreItem">
                  {item}
                </div>
              );
            })}
          </div>
          <div className="language">{data.language}</div>
          <div className="type">{data.type}</div>
          <div className="premiered">{data.premiered}</div>
          <div className="runtime">Runtime: {data.runtime}</div>
          <div className="watchLink">
            <a href={data.url} className="watchNow">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="Error">Cannot Find</div>
  );
}
