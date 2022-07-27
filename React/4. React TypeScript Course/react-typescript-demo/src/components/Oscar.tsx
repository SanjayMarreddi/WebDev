type OscarProps = {
    children : React.ReactNode   // This type from React Types package is to be kept in mind.
}

export const Oscar = (props: OscarProps) => {
    return <div> {props.children} </div>
} 