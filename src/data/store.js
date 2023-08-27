/**
 * #State Management
 * Link@ https://vuejs.org/guide/scaling-up/state-management.html#state-management
 * Pinia is a state management library that implements all of the above. It is maintained by the Vue core team, and works with both Vue 2 and Vue 3.
 */

import { reactive } from 'vue' 
export const store =  reactive({
    count:0,
    increment(){this.count++}
})

