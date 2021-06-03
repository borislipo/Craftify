import axios from "axios";
import React, { useState, useEffect } from "react";
import VideoElement from "./VideoElement";
import { v4 as uuid } from "uuid";
import "./ResultsArray.css";

function ResultsArray(props) {
  const [results, setResults] = useState([]);
  const { labels } = props;

  const fetchResults = async (label) => {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKVU2iwOhz1d0Zj3MNtkFPU2Sx2zcYxXQ&q=recycled craft ${label},&maxResults=1`
    );
    return response.data.items;
  };

  useEffect(() => {
    const getResults = async () => {
      let newArr = [];
      if (labels) {
        const labelArray = labels.split(", ");
        for (const element of labelArray) {
          const result = await fetchResults(element);
          newArr.push(result[0]);
        }
        console.log(newArr);
        setResults(newArr);
      }
    };
    getResults();
  }, []);

  return (
    <React.Fragment>
      <div className="ResultsList">
        {results.map((result) => {
          return (
            <VideoElement
			
              key={uuid()}
              VideoID={result.id.videoId}
              VideoTitle={result.title}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ResultsArray;
