import "./Header.scss";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__inner">
          <div className="logo">
            <svg width="46" height="33" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0 -.53)" fill="none" fill-rule="evenodd">
                <rect
                  fill="#AEA6E2"
                  transform="rotate(45 29.586 17)"
                  x="17.586"
                  y="5"
                  width="24"
                  height="24"
                  rx="2"
                />
                <path
                  d="m18.414 1.444 14.142 14.142a2 2 0 0 1 0 2.828L18.414 32.556a2 2 0 0 1-2.828 0L1.444 18.414a2 2 0 0 1 0-2.828L15.586 1.444a2 2 0 0 1 2.828 0Zm-.707.707a1 1 0 0 0-1.414 0L2.15 16.293a1 1 0 0 0 0 1.414L16.293 31.85a1 1 0 0 0 1.414 0L31.85 17.707a1 1 0 0 0 0-1.414L17.707 2.15Z"
                  fill="#CBC8E1"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
          <nav className="menu">
            <a href="" className="is-active">
              Home
            </a>
            <a href="">Inbox</a>
            <a href="">My Tasks</a>
            <a href="">Reports</a>
          </nav>
          <nav className="actions">
            <button aria-label="Setting">
              <svg width="23" height="25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.871 19.694c-.6.456-1.257.838-1.96 1.134V22.5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-1.672a9.022 9.022 0 0 1-1.96-1.134l-1.45.837a2 2 0 0 1-2.733-.732l-1.5-2.598A2 2 0 0 1 1 14.469l1.45-.837a9.12 9.12 0 0 1 0-2.264L1 10.53A2 2 0 0 1 .268 7.8l1.5-2.598A2 2 0 0 1 4.5 4.469l1.45.837a9.022 9.022 0 0 1 1.96-1.134V2.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.672a9.022 9.022 0 0 1 1.961 1.134l1.45-.837a2 2 0 0 1 2.732.732l1.5 2.598a2 2 0 0 1-.732 2.732l-1.45.837a9.12 9.12 0 0 1 0 2.264l1.45.837a2 2 0 0 1 .732 2.732l-1.5 2.598a2 2 0 0 1-2.732.732l-1.45-.837Zm-5.46-3.018a4.176 4.176 0 1 0 0-8.352 4.176 4.176 0 0 0 0 8.352Z"
                  fill="#CBC8E1"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <button aria-label="notifs">
              <svg width="21" height="25" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.314 2.624a7.003 7.003 0 0 1 5.507 6.84v9h2a1 1 0 0 1 0 2h-18a1 1 0 1 1 0-2h2v-9a7.003 7.003 0 0 1 5.508-6.84A1.01 1.01 0 0 1 9.32 2.5v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1c0 .042-.002.084-.007.124Zm3.507 15.84v-9a5 5 0 0 0-10 0v9h10Zm-6.732 3h3.465a2 2 0 1 1-3.465 0Z"
                  fill="#CBC8E1"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
            <a className="avatar" href="">
              <img
                src="https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=87&q=80"
                alt=""
              />
            </a>
          </nav>
        </div>
      </header>
      <div className="center"></div>
      <main className="main">
        <div className="hero">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1611288875785-f62fb9b044a7"
              alt=""
            />
            <figcaption>Site under Maintenance</figcaption>
          </figure>
        </div>
      </main>

      <div className="center"></div>
    </div>
  );
};

export default Header;
