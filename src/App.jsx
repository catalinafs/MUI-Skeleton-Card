import { Container } from '@mui/material'
import SkeletonCard from './components/SkeletonCard';
import './index.css'

function App() {
  return (
    <Container fixed sx={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <SkeletonCard />
    </Container>
  );
}

export default App;