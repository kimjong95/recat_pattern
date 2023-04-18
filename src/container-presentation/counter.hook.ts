import { useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { count } from "./Counter.store";

export function useCounterHooks() {
  //
  function useGetCountValue() {
    const countValue = useRecoilValue(count);
    return useMemo(() => {
      return countValue;
    }, [countValue]);
  }

  function useSetCountValue() {
    const [_, setCountValue] = useRecoilState(count);
    return useCallback(
      (targetCount: number) => {
        setCountValue(targetCount);
      },
      [setCountValue]
    );
  }

  return { counterValue: useGetCountValue, setCountValue: useSetCountValue };
}
