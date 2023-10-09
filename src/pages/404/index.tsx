import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className='font-bold text-5xl'>This page is not found. Try going to <Link className="underline text-blue-600" to='/login'>Login</Link>.</div>

  )
}

export default NotFoundPage;