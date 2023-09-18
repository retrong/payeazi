import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import ErrorPage from "./components/pages/error-page";
import LandingPage from './components/pages/LandingPage';
import SignIn from "./components/pages/SignIn.jsx";
import Root from "./routes/Root";

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route errorElement={<ErrorPage/>}>
                <Route exact path="/" element={ <Root /> } />
                <Route path="/home" element={ <LandingPage /> } />
                <Route path="/signin" element={ <SignIn /> } />
            </Route>
        )
    )

    // const Api_url = "http://localhost:5000"
    //
    // fetch(Api_url)
    // .then((response) => response.json())
    // .then((Message) => console.log(Message))
    // .catch((error) => console.log(error))

	return (
       <div>
           <RouterProvider router={router} />
       </div>
		
	);
}
