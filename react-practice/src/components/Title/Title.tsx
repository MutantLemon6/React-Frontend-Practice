import { useTitle } from "./useTitle";


export default function Title() {
  const { title } = useTitle();

  return (
    <div className="container-fluid py-4 bg-orange">
      <div className="row">
        <div className="col">
          <h1 className="text-white text-center mb-0 display-4 fw-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};