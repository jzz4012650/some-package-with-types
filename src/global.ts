import { add } from "./add";

declare global {
    interface Window {
        myAdd: typeof add;
    }

    export const myAdd: typeof add;
}
