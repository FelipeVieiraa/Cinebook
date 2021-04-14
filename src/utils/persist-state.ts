import storage from '@react-native-async-storage/async-storage';

export const persistState = async (storageKey: string, state: object) => {
  await storage.setItem(storageKey, JSON.stringify(state));
}

export const getIntialState = async (storageKey: string) => {
  const savedState = await storage.getItem(storageKey);
  try {
    if (!savedState) {
      return undefined;
  }
  return JSON.parse(savedState ?? '{}');

  }catch(err) {
    console.error(`Error loading state: ` + storageKey);
    return undefined;
  }
}