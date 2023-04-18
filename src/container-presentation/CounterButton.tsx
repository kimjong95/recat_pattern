import { useRecoilState } from "recoil";
import { count } from "./counter.store";

export function CounterButton() {
  //
  const [countValue, setCount] = useRecoilState(count);

  return <button onClick={() => setCount(countValue + 1)}> click! </button>;
}
