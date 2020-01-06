export default {
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: 0,
        borderRadius: "15px",
    },
    container: {
        display: "flex",
        height: "80vh",
        flexDirection: "row",
        alignContent: "center",
        borderRadius: "10px",
        overflowY: "auto",
        overflowX: "hidden",
        width: "80vw",
        "& img": {
            minWidth: "350px",
            objectFit: "cover",
        },
        '@media (max-width: 780px)': {
            flexDirection: "column",
            "& img": {
                margin: "3px auto"
            }
        }
    },
    infoContainer: {
        padding: "5px",
    },
    expandables: {
        display: "flex",
        flexWrap: "wrap"
    }
}