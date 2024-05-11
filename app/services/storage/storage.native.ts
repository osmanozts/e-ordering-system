import * as SecureStore from "expo-secure-store";

export async function getStorageItem(key: string) {
  return await SecureStore.getItemAsync(key);
}

export async function setStorageItem(key: string, value: string) {
  await SecureStore.setItem(key, value);
}

export async function removeStorageItem(key: string) {
  await SecureStore.deleteItemAsync(key);
}
