import axios from "axios";
import { useEffect, useState } from "react";
function useToken() {
    const [token, setToken] = useState()
    useEffect(() => {
        let data = '{"grant_type":"client_credentials","client_id":"Yi9DTgsr1EfvxIvRfHya0GzCoz8JjxTxT5KI-aJtJGs","scope":"market:12545","client_secret":null}';

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://wishkart.commercelayer.io/oauth/token',
            data,
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            }
        };

        axios.request(config)
            .then((response) => {
                setToken(response.data);
            })
            .catch((error) => {
                return;
            });
    }, [])

    return token;
}
export default useToken;
