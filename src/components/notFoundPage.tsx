import { Link } from "react-router";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found </h2>
            <Link to={'/'}>Go back</Link>
        </div> 
    )
}