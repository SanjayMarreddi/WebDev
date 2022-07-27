type statusProps = {
    status: 'loading' | 'success' | 'error'
}  // This ensures to raise an error when status prop in App.tsx is assigned a random string other than these 3.

export const Status = (props: statusProps) => {
    let msg
    if (props.status === 'loading'){
        msg = 'Loading...'
    }
    else if (props.status === 'success'){
        msg = 'Data fetched successfully!'
    }
    else if (props.status === 'error'){
        msg = 'Error fetching data :('
    }
    return (
        <div>
           <h2> Status - {msg}</h2>
        </div>
    )
}