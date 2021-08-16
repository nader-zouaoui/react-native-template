import { useCallback, useState } from 'react';
import { objectEqual } from 'helpers/objectEqual';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '_redux/store';
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = (
  selector,
  equalityFN = objectEqual,
) => {
  return useSelector(selector, equalityFN);
};

export const useLoadingDispatch = () => {
  const classicDispatch = useDispatch();

  const [loadingProcesses, setIsLoading] = useState(0);

  const startLoading = useCallback(() => {
    setIsLoading((prev) => (prev += 1));
  }, []);
  const stopLoading = useCallback(() => {
    setIsLoading((prev) => Math.min(prev - 1, 0));
  }, []);

  const dispatch = useCallback(
    async (callback) => {
      startLoading();
      const response = await classicDispatch(callback);

      stopLoading();

      return response;
    },
    [classicDispatch, startLoading, stopLoading],
  );

  return {
    isLoading: loadingProcesses > 0,
    dispatch,
    startLoading,
    stopLoading,
    classicDispatch,
  };
};
