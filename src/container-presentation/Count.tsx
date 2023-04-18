import { useRecoilValue } from "recoil";
import { count } from "./counter.store";

export function Count() {
  //
  const countValue = useRecoilValue(count);

  return <p> count: {countValue}</p>;
}
