import { useSyncExternalStore } from "react";

const subscribeNoop = () => () => {};

// Detecta se já estamos no cliente sem disparar um setState em efeito
// (evita o lint react-hooks/set-state-in-effect) — no servidor sempre
// retorna false, no cliente retorna true a partir do primeiro render
// pós-hidratação.
export function useHasMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
}
