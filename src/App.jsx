import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const CampDetailPage = lazy(() => import('./pages/CampDetailPage/CampDetailPage.jsx'));
const CampFeatures = lazy(() => import('./components/CampFeatures/CampFeatures.jsx'));
const CampReviews = lazy(() => import('./components/CampReviews/CampReviews.jsx'));

function App() {
  return (
    <>
    <Layout>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/catalog' element={<CatalogPage />}/>
        <Route path='/catalog/:id' element={<CampDetailPage />}>
        <Route path='features' element={<CampFeatures />}/>
        <Route path='reviews' element={<CampReviews/>} />
        </Route>
        <Route path="/*" element={<HomePage />} />
      </Routes>
      </Suspense>
    </Layout>
    </> 
  )
}

export default App
