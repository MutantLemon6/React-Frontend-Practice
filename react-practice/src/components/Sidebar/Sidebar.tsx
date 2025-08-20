import { useBoxes } from "../Boxes/Box/context/useBoxes";
import RecentBoxes from "../Boxes/RecentBoxes/RecentBoxes";
import Collapsible from "../Collapsible";
import NavBar from "./NavBar/NavBar";

export default function Sidebar() {
  const { boxes } = useBoxes();
  return (
    <Collapsible>
      <NavBar />
      <RecentBoxes boxes={boxes} />
    </Collapsible>
  );
}