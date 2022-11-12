const useLocalStorage = () => {
    const setItem = (key, value) => {
        localStorage.setItem(key, value);
    }

    const getItem = (key, defaultItemValue) => {
        let item = defaultItemValue;
        if (localStorage.getItem(key) !== null){
            item = localStorage.getItem(key);
            localStorage.removeItem(key);
        }

        return item;
    }

    return {
        set_item: setItem,
        get_item: getItem
    }
}

export default useLocalStorage;