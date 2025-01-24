import { NavLink } from "react-router-dom";


function AppHeader() {
  const menu = [
    {
      page: "Homepage",
      path: "/"
    },
    {
      page: "Movies",
      path: "/movies"
    }
  ]


  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {menu.map((curPage , index) => {
                return (
                  <li key={index} className="nav-item">
                    <NavLink className="nav-link text-white active" aria-current="page" to={curPage.path}>{curPage.page}</NavLink>
                  </li>
                )
              })}

            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default AppHeader;