

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>

}

function ComponentsAndPropsApp() {
    return (
        <div>
            <Welcome name="Sara1" />
            <Welcome name="Sara2" />
            <Welcome name="Sara3" />
        </div>
    )
}

export default ComponentsAndPropsApp;