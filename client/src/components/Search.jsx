import React, { useState, useEffect, useRef } from "react";
import { TextField, withStyles } from "@material-ui/core";
import MarvelApi from "../axios/MarvelApi";
import { HeroCard, ErrorDisplay } from "./";
import { debounce } from "lodash";
import { searchStyles } from "../styles";
import fetchObj from "../helper/fetchObj";
import InfiniteScroll from "react-infinite-scroll-component";

function Search({ classes, type }) {
  const [resultData, setResultData] = useState([]);
  const [error, setError] = useState("");
  const more = useRef({});
  const [filter, setFilter] = useState("");
  const debouncer = useRef(
    debounce((data, type, add) => fetchData(data, type, add), 400)
  );

  useEffect(() => {
    debouncer.current(filter, type);
  }, [filter, type]);


  const fetchData = async (filter, type, add) => {
    if (!filter) {
      more.current = {};
      return setResultData([]);
    }
    try {
      const { results, total, offset } = await MarvelApi.getList(
        fetchObj(filter, type, add && more.current.offset + 20),
        type
      );
      more.current = { total, offset };
      setResultData(prev=>add ? [...prev, ...results] : results);
    } catch (e) {
      setError(e.status || "Something went wrong");
    }
  };
  return (
    <div>
      <TextField
        variant="outlined"
        className={classes.searchBar}
        value={filter}
        label="search"
        onChange={e => setFilter(e.target.value)}
      ></TextField>
      {error && <ErrorDisplay message={error} close={() => setError("")} />}
      <InfiniteScroll
        className={classes.cardContainer}
        dataLength={resultData.length}
        height="85vh"
        next={()=>fetchData(filter, type, true)}
        hasMore={more.current.total > more.current.offset + 20}
        loader={<h1 style={{width:"100%",textAlign:"center"}}>Loading...</h1>}
      >
        {resultData.map(item => (
          <HeroCard info={item} key={item.id} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default withStyles(searchStyles)(Search);
