export default (filter, type, offset = 0) => {
    switch (type) {
        case "characters":
            return { nameStartsWith: filter, offset };
        case "comics":
            return { titleStartsWith: filter, offset };
        case "creators":
            return { nameStartsWith: filter, offset };
        default:
            return filter
    }
}