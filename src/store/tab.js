export default {
    state: {
        isCollapse: false
    },
    mutations: {
        collapseMene(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}