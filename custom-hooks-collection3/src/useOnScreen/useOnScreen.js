/**
 * Custom useOnScreen Hook
 *
 * doc: do something when an element appear on the screen ( by user scroll )
 */
import { useEffect, useState } from "react";

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(ref.current);
    if (ref.current == null) {
      return;
    }

    // when the element is visible on the screen, we set isVisible to true
    // [IntersectionObserver]:
    // The Intersection Observer API provides a way to asynchronously observe
    // changes in the intersection of a target element with an ancestor element or
    // with a top-level document's viewport.
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current == null) {
        return;
      }
      observer.unobserve(ref.current);
    };
  }, [ref.current, rootMargin]);

  return isVisible;
};

export default useOnScreen;
