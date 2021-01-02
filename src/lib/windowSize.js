import {useLayoutEffect, useState} from "react";

export function useWindowSize() {
    const [size, setSize] = useState({width: 0, height: 0});
    useLayoutEffect(() => {
        function updateSize() {
            setSize({width: window.outerWidth, height: window.outerHeight});
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}