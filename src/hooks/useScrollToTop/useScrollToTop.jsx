import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// BUG: this should be hook? what it does exactly
const useScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

export default useScrollToTop;

