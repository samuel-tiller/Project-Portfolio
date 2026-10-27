import { createRoutesFromElements, Route } from 'react-router'
import Home from './components/Home.tsx'
import Layout from './components/Layout.tsx'
import Projects from './components/Projects.tsx'


export default createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="projects" element={<Projects />} />
  </Route>
)