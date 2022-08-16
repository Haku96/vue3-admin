import { createPinia } from "pinia";
import useAppStore from "./modules/app";

const pinia = createPinia();

// import all store modules can help us control file and
// reduce future code, more code more readable
export { useAppStore };
export default pinia;
