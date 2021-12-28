import loading from "../../assets/images/book_loading.gif";

const Loading = () => {

    const loading_style = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return <div style={loading_style}>
        <img src={loading} alt="loading..." width="100px" height="100px"/>
    </div>
}

export default Loading;