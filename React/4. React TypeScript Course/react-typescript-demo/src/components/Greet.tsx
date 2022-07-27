// Use `types` when building applications & use `interfaces` when building libraries!   => Advice
type GreetProps = {
    name: string
    messageCount?: number       // We are saying that this prop is optional.
    isLoggedIn: boolean
} 

export const Greet = (props : GreetProps) => {
    const {messageCount = 0} = props  // It means that if messageCount is not passed, Use 0.
    return (
        <div>
            { props.isLoggedIn ? 
               <h1> Welcome {props.name}! You have {messageCount} unread messages </h1> :
               <h1> Welcome Guest </h1>

                // Both works! 
                // `Welcome ${props.name}! You have ${props.messageCount} unread messages`: 
                // `Welcome Guest`

            }
        </div>
    )
}   