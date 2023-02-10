export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18peHh8_KGf71RYF-BuisiG39M3LLI9PNlg&usqp=CAU" alt="Logo" width="30" height="30" className="d-inline-block align-text-center me-3" />
                        BlogBoard
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Catégories
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Évenements</a></li>
                                    <li><a className="dropdown-item" href="#">Jeux-vidéos</a></li>
                                    <li><a className="dropdown-item" href="#">Actualité</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
