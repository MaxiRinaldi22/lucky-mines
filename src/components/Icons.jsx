import diamond from "../assets/images/diamond.png";
import diamondLose from "../assets/images/diamond-lose.png";
import bomb from "../assets/images/jewel.png";
import bombLose from "../assets/images/jewel-lose.png";

export function StarWin() {
  return <img width={64} height={64} src={diamond} alt="" />;
}

export function StarLose() {
  return <img width={64} height={64} src={diamondLose} alt="" />;
}

export function Bomb() {
  return <img width={64} height={64} src={bomb} alt="" />;
}

export function BombLose() {
  return (
    <img width={64} height={64} src={bombLose} alt="" />
  );
}
