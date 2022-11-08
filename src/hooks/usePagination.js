import { useState } from "react";

const usePagination = (data, portionLength) => {
    const [endIndex, changeEndIndex] = useState(portionLength);

    const getDataPortion = () => {
        const dataPortion = [];

        for (let i = 0; i < endIndex && i < data.length; ++i){
            dataPortion.push(data[i]);
        }

        return dataPortion;
    };

    const applyPagination = dataToObserve => {
        if (dataToObserve !== null){
            const observer = new IntersectionObserver((entries) =>{
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        changeEndIndex(endIndex + portionLength);
                    }
                })
            });

            observer.observe(dataToObserve);
        }
        
        changeEndIndex(portionLength);
    };

    return [applyPagination, getDataPortion];
}

export default usePagination;