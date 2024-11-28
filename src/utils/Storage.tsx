export const saveToLocalStorage = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  
  export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : defaultValue;
};
