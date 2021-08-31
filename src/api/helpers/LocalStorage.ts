
/**
   * Store to local storage
   * @param key: String key
   * @param value: Object/String, if missing it will remove the key from local storage
   * @param stringify: whether to stringify the value before saving
   */
export const localStorageSave = (key: string, value: any, stringify: boolean) => {
  const v = stringify ? JSON.stringify(value) : value;
  try {
    if (value === null || value === undefined)
      window.localStorage.removeItem(key);
    else
      window.localStorage.setItem(key, /** @type {string} */(v));
  }
  catch (ex) { }
}

/**
   * Get a value from local storage
   * @param key: String local storage name
   * @param unstringify: if true it'll transform the value using JSON.parse
   * @return object from localstorage or null 
   */
export const localStorageGet = (key: string, unstringify: boolean): any => {
  try {
    const value = window.localStorage.getItem(key);
    const ret = unstringify ? JSON.parse(value || "") : value;
    if (ret) {
      return ret;
    }
    return undefined;
  }
  catch (ex) { }
}

export class StorageKeys {
  public static readonly FLIGHT_AVAILIBILTY = "availablity";
  public static readonly DIRECT_FLIGHT = "direct_flight";
  public static readonly ORIGIN_LOCATION = "orig_location";
  public static readonly DESTINATION_LOCATION = "dest_location";
}
