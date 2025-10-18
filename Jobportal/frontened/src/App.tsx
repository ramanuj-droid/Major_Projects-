
import './App.css'
import { Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import Footer from './components/Footer/Footer';
import FindJobs from './pages/FindJobs';
import FindTalent from './pages/FindTalent';
import TalentProfile from './pages/TalentProfile';
import PostJobs from './pages/PostJobs';
import JobDescription from './pages/JobDescription';
import ApplyJobs from './pages/ApplyJobs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Company from './pages/Company';
import PostedJob from './pages/PostedJob';
import JobHistory from './pages/JobHistory';
import ErrorPage from './pages/ErrorPage';
import Authenication from './pages/Authenication';
import Profile from './pages/Profile';



function App() {



  return (
    <div className="bg-[#292929] h-screen font-['poppins']">
      <Navbar ></Navbar>
    <Routes>
      <Route path="/"element={<Home></Home>}></Route>
      <Route path="/find-job"  element={<FindJobs></FindJobs>}></Route>
      <Route path="/find-talent"  element={<FindTalent></FindTalent>}></Route>
      <Route path="/talent-profile/:name"  element={<TalentProfile></TalentProfile>}></Route>
      <Route path="/post-job"  element={<PostJobs></PostJobs>}></Route>
      <Route path="/job-des/:id"  element={<JobDescription></JobDescription>}></Route>
      <Route path="/apply-job/:id"  element={<ApplyJobs></ApplyJobs>}></Route>
      <Route path="/company/:id"  element={<Company></Company>}></Route>
      <Route path="/posted-job"  element={<PostedJob></PostedJob>}></Route> 
      <Route path="/job-history"  element={<JobHistory></JobHistory>}></Route> 
      <Route path="/auth"  element={<Authenication></Authenication>}></Route> 
      <Route path="/profile"  element={<Profile></Profile>}></Route> 
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <ToastContainer />
    <Footer></Footer>
    </div>
  )
}

export default App
