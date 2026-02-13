
import 'matrix-js-sdk';

declare module 'matrix-js-sdk' {
    interface AccountDataEvents {
        [key: string]: any;
    }
    interface StateEvents {
        [key: string]: any;
    }
}
