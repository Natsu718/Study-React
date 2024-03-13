import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  // debounce の対象 state と setter
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // delay 後 debounce の対象 state をアップデート
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // cleanup フェーズで clearTimeout が実行される
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  // 最終的にアップデートされた state をリターン
  return debouncedValue;
}
