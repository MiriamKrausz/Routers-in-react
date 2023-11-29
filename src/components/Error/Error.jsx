import { useRouteError } from "react-router-dom"

function Error() {
    const error = useRouteError();
    return (
        <>
            <h1>
                create error
            </h1>
            {error.status || error.message}
        </>
    )
}
export default Error

