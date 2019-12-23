export default {

    nav: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        textDeacoration: "none",
        alignItems: "center",
        height: "50px",
        position: "fixed",
        zIndex: 50,
        top: 0,
        left: 0
        
    },
    link: {
        textDecoration: "none",
        color: "black",
        display:"flex",
        fontSize:"20px "
    },
    active: {
        '&::before': {
            content: `""`,
            backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/8/8a/Bouclier_Captain_America_1018.png)",
            backgroundSize:"100% 100%",
            display: 'block',
            height: 20,
            width:20,
            marginRight:"5px"
        }
    }

}