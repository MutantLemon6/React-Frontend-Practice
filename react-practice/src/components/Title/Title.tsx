import { useTitle } from "./useTitle";


export default function Title() {
  const { title } = useTitle();

  return (
    <div className="py-3 text-center">
      <h1>{title}</h1>
    </div>
  );
};