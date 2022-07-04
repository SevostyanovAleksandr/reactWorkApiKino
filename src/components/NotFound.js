const NotFound = ({onNotFound}) => {
return (
    <div>
        <h1>No result :(</h1>
        <input type="btn" value="Верунться на главную" onClick={() => onNotFound()} />
    </div>
)
}

export default NotFound;