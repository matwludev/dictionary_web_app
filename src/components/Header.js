import logo from "../assets/logo.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
// const body = document.querySelector("body");

function Header() {
	return (
		<>
			<header>
				<img src={logo} alt="app logo book icon" />
				<nav>
					<div className="fontChange">
						<button className="fontBtn">
							<p>Sans Serif</p>
							<img src={arrowDown} alt="arrow down icon" />
						</button>
						<ul className="fontsList">
							<li>
								<button>Sans Serif</button>
							</li>
							<li>
								<button>Serif</button>
							</li>
							<li>
								<button>Mono</button>
							</li>
						</ul>
					</div>
					<div className="modeChange">
						<label className="switch">
							<input type="checkbox" />
							<span className="slider"></span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 22 22">
								<path
									fill="none"
									stroke="#838383"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
								/>
							</svg>
						</label>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Header;
