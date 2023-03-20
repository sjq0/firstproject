import { createStore } from 'vuex'

const store = createStore({
	state:{
		status:'',
		currenttime:0
	},
	mutations:{
		changestatus(state,data){
			state.status = data
		},
		changecurrenttime(state,data){
			state.currenttime = data
		}
	}
})

export default store