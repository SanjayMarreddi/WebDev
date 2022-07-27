type ContainerProps = {
    styles: React.CSSProperties   // Instead of manually mentioning, we are using library here.
}

// Typing Styles as Props.

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text content goes here!
        </div>
    )
}
