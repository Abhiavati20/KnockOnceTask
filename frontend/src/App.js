import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import { Container }                             from 'react-bootstrap';
import RegisterScreen                            from './components/RegisterScreen';
import UserListScreen                            from './components/userListScreen';
function App() {
  return (
    <Router>
      <main className="py-3">
        <Container>
            <Routes>
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/' element={<UserListScreen />} />
            </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
