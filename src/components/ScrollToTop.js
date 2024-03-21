import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const ScrollToTop = () => {
    
    const { pathname } = useLocation();

    const [searchParams] = useSearchParams();
    const searchString = searchParams.toString() ?? '';

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname, searchString]);

    return null;
};

export default ScrollToTop;
