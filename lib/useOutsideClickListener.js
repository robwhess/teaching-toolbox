/*
* React Hook that calls a provided callback whenever a click occurs outside
* a given element.  Adapted from here:
*
* https://stackoverflow.com/a/42234988
*/

import { useEffect } from "react";

/*
 * React hook to listen for clicks on a given element.
 *
 * @param ref A ref corresponding to the element on which to listen for outside
 *   clicks.
 * @param callback A callback function to be called whenever a click occurs
 *   outside the element corresponding to ref.
 */
function useOutsideClickListener(ref, callback) {
  /*
   * Use the provided ref to determine when a click
   */
  function handleOutsideClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    /*
     * Clean up by unbinding the outside click listener.
     */
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });
}

export default useOutsideClickListener;
