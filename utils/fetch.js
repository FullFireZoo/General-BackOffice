

/**
 * It takes a url, a callback function, a method (defaults to GET), and options
 and returns a promise that resolves to the data returned by the server.
 * @param {string} url  - The url to fetch
 * @param {function} callback - The function to call when the fetch is complete.
 * @param {string} [method=GET] - The HTTP method to use. Defaults to GET.
 * @param {object}[options] - This is an object that contains the following properties:
 */
export function gf(url,callback, method = 'GET',options = {}) {
    let myHeaders = new Headers();
    let fetchOptions = { method: method , headers: myHeaders };
    if (options) {
        fetchOptions = Object.assign(fetchOptions, options);
    }
    fetch(url, fetchOptions)
        .then(response => response.json())
        .then(data => {
            callback(data);
        }
        ).catch(error => {
         
            throw error;
        }
        );

}