
import { FallbackProps} from 'react-error-boundary'


const FuncFallback = ({ error,resetErrorBoundary }: FallbackProps) => {
    return <><h1>Something went wrong.</h1>
    <p>Error:{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </>;
  

}

export default FuncFallback

















