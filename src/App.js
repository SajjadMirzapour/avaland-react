import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout'
import Home from './views/Home/Home'
import store from './store'
import { Provider } from 'react-redux'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from 'react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './views/Login/Login';
import Playlist from './views/Playlist/Playlist';
import PlaylistDetail from './views/PlaylistDetail/PlaylistDetail';
import Upload from './views/Upload/Upload';
import Favorites from './views/Favorites/Favorites';
import Search from './views/Search/Search';
import Music from './views/Music/Music';
import MusicDetail from './views/MusicDetail/MusicDetail';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

function App() {
  return (
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/playlists/:id' element={<PlaylistDetail />} />
              <Route path='/playlists' element={<Playlist />} />
              <Route path='/upload' element={<Upload />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/search' element={<Search />} />
              <Route path='/musics/:id' element={<MusicDetail />} />
              <Route path='/musics' element={<Music />} />
            </Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer position='top-right' />
        </QueryClientProvider>
      </Provider>
    </Router>
  );
}

export default App;
