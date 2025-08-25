export default function Footer() {
    return (
        <footer className="sidebar-translucent mt-auto py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <small className="text-light">
                            Personal MTG Collection Manager •
                            Card data from <a href="https://scryfall.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">Scryfall</a>
                        </small>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <small className="text-light">
                            Last synced: {new Date().toLocaleDateString()}
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}