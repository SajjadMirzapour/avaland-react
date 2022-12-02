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
const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

function App() {
  return (
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </Router>
  );
}

export default App;
