export default function Header() {
    return(
        <header className="sidebar-translucent py-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="h3 mb-0">MTG Collection Manager</h1>
                        <small>Personal Card Database</small>
                    </div>
                    <div className="col-auto">
                        <div>
                            {new Date().toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}