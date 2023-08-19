import { Link, Outlet } from 'react-router-dom';


export default function Root() {
  return (
      <>
        <div className=" text-blue-400 underline">
            <Link to="/"> LandingPage  </Link> <br />
            <Link to="/signin"> SignIn </Link>
        </div>

        <div>
            <Outlet />
        </div>
      </>
  )
}
