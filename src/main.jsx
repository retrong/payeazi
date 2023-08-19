import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
// import ErrorPage from './components/pages/error-page.jsx';
import './index.css';
// import { Root } from './routes/root';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Root />,
//         errorElement: <ErrorPage />,
// 	},
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/*<RouterProvider router={router}>*/}
		{/*	<App />*/}
		{/*</RouterProvider>*/}
		<App />
	</React.StrictMode>
);
