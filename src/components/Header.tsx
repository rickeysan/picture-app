export const Header = () => {
  return (
    <div className="navbar bg-base-100 mb-10 shadow-xl rounded-box">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">
          絵画で養う観察力トレーニング
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  )
}
