export default {
    footer: {
        position: "fixed",
        bottom: "1vh",
        right: "3vw",
        textDecoration: "none",
        fontSize: "12px",
        color: "black",
        fontWeight: "heavy"

    },
    App: {
        paddingTop: "55px",
        backgroundImage: "url(https://images6.alphacoders.com/318/318384.png)",
        backgroundAttachment: "fixed",
        height: "100vh",
        boxSizing: "border-box",
        overflowY: "auto",
        overflowX: "hidden",
        backgroundSize: "cover",
        '@media (max-width: 780px)': {
            backgroundImage: "url(http://www.mobileswall.com/wp-content/uploads/2015/10/640-minimalism-iron-man-zheleznyy-l.jpg)"
        }
    }
}