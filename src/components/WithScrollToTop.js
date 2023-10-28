import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

//Higher order component (HOC) allows scrolling to top when navigating between pages
export default function withScrollToTop(WrappedComponent) {
    return (
        <>
            <WrappedComponent />
            <ScrollToTop />
        </>
    );
};

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);
}
