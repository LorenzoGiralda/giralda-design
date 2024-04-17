import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import PortfolioHome from "./components/PortfolioHome";
import BlogPage from "./pages/BlogPage";
import ContattiPage from "./pages/ContattiPage";
import ChiSono from "./pages/ChiSono";
import FocusPortfolio, {loader as portfolioLoader} from "./components/FocusPortfolio";
import BlogHome from "./components/BlogHome";
import FocusBlog,  {loader as BlogLoader}  from "./components/FocusBlog";
import ContattiHome from "./components/ContattiHome";

const router = createBrowserRouter([

{path: '', element:<RootPage></RootPage>, errorElement: "",

children:[

{index: true, element: <HomePage></HomePage>},

{path: 'chi-sono', element:<ChiSono></ChiSono>},

{path: 'portfolio', element: <PortfolioPage></PortfolioPage>,
children:[
{index: true, id:'total-portfolio', element: <PortfolioHome></PortfolioHome>},
{path: ':idLavoro', id: 'single-work', element: <FocusPortfolio></FocusPortfolio>, loader: portfolioLoader}
]
},

{path: 'blog', element: <BlogPage></BlogPage>,
children:[
{index: true, id:'total-blog', element: <BlogHome></BlogHome>},
{path: ':idArticolo', id: 'single-article', element: <FocusBlog></FocusBlog>, loader: BlogLoader}
]
},

{path: 'contatti', element: <ContattiPage></ContattiPage>,
children:[
{index: true, element: <ContattiHome></ContattiHome>},
]
}

]

}

])


const App = () => {
  return (
  <RouterProvider
  router = {router}> 
  </RouterProvider>
 )}

export default App;
