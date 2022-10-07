import { useNavigate } from "react-router-dom";
export const withRouter = () => {
    const Wrapper = (props) => {
        const  navigate = useNavigate();

        return  navigate(`/search`);
    };
    return Wrapper;
};
