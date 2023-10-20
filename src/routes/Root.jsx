import { Link, Outlet } from 'react-router-dom';


export default function Root() {
  return (
      <>
        <div className=" text-blue-400 underline py-2 px-5">
            <Link to="/home"> LandingPage  </Link> <br />
            <Link to="/signin"> SignIn </Link> <br />
            <Link to="/register"> Register </Link>
        </div>

        <div>
            <Outlet />
        </div>
      </>
  )
}
