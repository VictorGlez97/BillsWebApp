import { createStore } from "vuex";

import bet from "./bet";
import bill from "./bill";

const store = createStore();

store.registerModule('bill', bill);
store.registerModule('bet', bet);

export default store;