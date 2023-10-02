import {Landingpage, ReadyRecord, SignUp, VideoRepo, VideoView} from './Pages'
import { Container } from './styled-components'
import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
function App() {

  return (
    <Router>
    <Container>
      <Routes>
        <Route path="/" exact element={<Landingpage />} />
        <Route path="/auth" element={<SignUp/>} />  
        <Route path="/video-repository" element={<VideoRepo/>} />  
        <Route path="/video-detail" element={<VideoView/>} />  
        <Route path="/just-recorded" element={<ReadyRecord/>} />  
      </Routes>
    </Container>
    </Router>
  )
}

export default App
