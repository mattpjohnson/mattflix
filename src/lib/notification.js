import Noty from 'noty';
import 'noty/lib/noty.css';
import 'noty/lib/themes/sunset.css';

export const notification = {
    error(error, message) {
        console.error(error);
        new Noty({
            text: message,
            theme: 'sunset',
            timeout: 2000,
            type: 'error'
        }).show();
    }
}