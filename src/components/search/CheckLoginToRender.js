import SearchPage from "./SearchPage"
function CheckLoginToRender(props) {
    const isLoggedIn = localStorage.getItem("logined");
    if (isLoggedIn) {
        return <SearchPage searchType="chooseType"/>;
    }
    return <h1>You need to Logined first</h1>;
}

export default CheckLoginToRender