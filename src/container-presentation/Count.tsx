import { useRecoilValue } from "recoil";
import { count } from "./Counter.store";

export function Count() {
  //
  const countValue = useRecoilValue(count);

  return <p> count: {countValue}</p>;
}
