const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="container-fluid py-4" style={{ backgroundColor: '#ff5722' }}>
            <div className="row">
              <div className="col">
                <h1 className="text-white text-center mb-0 display-4 fw-bold">{children}</h1>
              </div>
            </div>
          </div>
    );
};

export default Title;