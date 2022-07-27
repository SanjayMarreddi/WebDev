type HeadingProps = {
    children : string
}

// children props passed to react component.
export const Heading = (props: HeadingProps) => {
    return <h2> {props.children} </h2>
}
