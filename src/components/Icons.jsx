import diamond from "../assets/img/diamond.png";
import diamondLose from "../assets/img/diamond-lose.png";
import bomb from "../assets/img/jewel.png";
import bombLose from "../assets/img/jewel-lose.png";

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
