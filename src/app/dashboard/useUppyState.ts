import { Uppy, State, Meta, Body } from "@uppy/core";
import { useMemo } from "react";
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector";

export function useUppyState<T, M extends Meta = Meta, B extends Body = Body>(
  uppy: Uppy<M, B>,
  selector: (state: State<M, B>) => T
) {
  const store = uppy.store;
  const subscribe = useMemo(() => store.subscribe.bind(store), [store]);
  const getSnapShot = useMemo(() => store.getState.bind(store), [store]);

  return useSyncExternalStoreWithSelector(
    subscribe,
    getSnapShot,
    getSnapShot,
    selector
  );
}
