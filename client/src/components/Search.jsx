import React, { useState, useEffect, useRef } from 'react'
import { TextField, withStyles, Button } from "@material-ui/core"
import MarvelApi from '../axios/MarvelApi'
import { HeroCard, ErrorDisplay } from './'
import { debounce } from "lodash"
import { searchStyles } from "../styles"
import fetchObj from '../helper/fetchObj'

function Search({ classes, type }) {
    const [resultData, setResultData] = useState([])
    const [error, setError] = useState("")
    const more = useRef({})
    const [filter, setFilter] = useState("")
    const debouncer = useRef(debounce((data, type) => fetchData(data, type), 400))

    useEffect(() => {
        debouncer.current(filter, type)
    }, [filter, type])

    const seeMore = () => {
        if (more.current.total > more.current.offset + 20) {
            fetchData(filter, type, true)
        }
    }

    const fetchData = async (filter, type, add) => {
        if (!filter) {
            more.current = {}
            return setResultData([])
        }
        try {
            const { results, total, offset } = await MarvelApi.getList(fetchObj(filter, type, add && more.current.offset + 20), type)
            more.current = { total, offset }
            setResultData(add ? [...resultData, ...results] : results)
        } catch (e) {
            setError(e.status || "Something went wrong")
        }
    }

    return (
        <div>
            <TextField variant="outlined"
                className={classes.searchBar}
                value={filter}
                label="search"
                onChange={e => setFilter(e.target.value)}></TextField>
            {error && <ErrorDisplay message={error} close={() => setError("")} />}
            <div className={classes.cardContainer}>
                {resultData.map(item => <HeroCard info={item} key={item.id} />)}
            </div>
            {more.current.total > more.current.offset + 20 && < Button className={classes.seeMore} onClick={() => seeMore()}>See more</Button>}
        </div >
    )
}

export default withStyles(searchStyles)(Search)