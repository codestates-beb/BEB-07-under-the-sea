import loading from "../assets/loading.gif"

function LoadingIndicator() {
    return <img className="loading-indicator" alt="now loading..." src={loading} style={{ margin: '1rem' }} />
  }
  
  export default LoadingIndicator