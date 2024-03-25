Key Learnings 
 - Don't use Indexes as Key
 - always call apis in useEffect
 - clear timer/setTimeOut in every render 

```js
 /**
  * This is search optimization - debouncing and caching
  * 
   * debouncing
   * where to call api - useEffect
   *
   * component re-renders - destroys comp and renders again by updating
   *
   * if press i or any key
   *  - re-renders the comp
   *  - useEffect() - api call
   *    - start timer and make api call after 200ms
   *
   * if press ip (2nd)
   *  - re-renders the comp
   *  - useEffect() - api call
   *    - start timer and make api call after 200ms but is it same timer or new?
   *      - new timer - new variable rendering every key press
   *
   * every time settimeout should be cleared after creation
   *  - clear as soon as comp re-renders
   *  press i - renders comp - useEffect - start timer (setTimeOut) - make api call -
   *
   * if 2nd key or p is called before 200ms of 1st i in ip
   *  - press i - renders comp - useEffect - start timer(setTimeOut of 200ms in queue)
   *  - keystroke before setTimeOut - destroys the comp - calls useEffect return method - clears timer
   *    - again comp re-renders - useEffect - start timer - setTimeOut - api call
   *
   * CACHING
   * - should not make an api call for previous keystroke events
   * - use rtk
   *    searchCache = {
   *        "abc" : ["abcd", "abcde"]
   *    }
   * 
   * LEARN LRU - LEAST RECENTLY USED caching
   *
   */
```

```js
/**
 * building N-Level/nested level reviews - like pyramid of doom
 * 
 * 1. How does review data structure looks like
 *      - array or list of reviews
 *      - create a review comp and pass the review data
 *      - have to loop for more comments or have to use recursion to create a new review
 * 
```