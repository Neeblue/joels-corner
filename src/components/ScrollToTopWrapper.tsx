import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

const ScrollToTopWrapper = ({ children }: any) => {
    return withScrollToTop(() => children);
};

function withScrollToTop(WrappedComponent: React.FC) {
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
            // behavior: "instant",
        });
    }, [pathname]);

    return null;
}

export default ScrollToTopWrapper;