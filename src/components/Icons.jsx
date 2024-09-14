import diamond from "../assets/img/diamond.png";
import bomb from "../assets/img/jewel.png";
export function StarWin() {
  return (
   <img width={64} height={64} src={diamond} alt="" />
  );
}

export function StarLose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={64}
      height={64}
      fill="rgba(106,95,67,1)"
    >
      <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
    </svg>
  );
}

export function Bomb() {
  return (
    <img width={64} height={64} src={bomb} alt="" />
  );
}

// export function BombLose() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       width={64}
//       height={64}
//       fill="rgba(57,57,57,1)"
//     >
//       <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
//     </svg>
//   );
// }
