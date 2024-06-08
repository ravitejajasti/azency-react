const loadedScripts = new Set();
const loadingScripts = new Map();

export const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (loadedScripts.has(src)) {
      resolve();
      return;
    }

    if (loadingScripts.has(src)) {
      // If the script is currently being loaded, return the same promise
      loadingScripts.get(src).then(resolve).catch(reject);
      return;
    }
    
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    const promise = new Promise((resolve, reject) => {
      script.onload = () => {
        loadedScripts.add(src);
        loadingScripts.delete(src);
        resolve();
      };
      script.onerror = () => {
        loadingScripts.delete(src);
        reject(new Error(`Failed to load script ${src}`));
      };
    });

    loadingScripts.set(src, promise);
    document.body.appendChild(script);

    // Return the promise for chaining
    promise.then(resolve).catch(reject);
  });
};
