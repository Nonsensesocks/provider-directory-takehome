import '../styles/Provider.css';
import LinearProgress from '@mui/material/LinearProgress';

function Loading() {
  return (
    <div className="loading">
      <LinearProgress
        color='inherit'
      />
    </div>
  );
}

export default Loading;