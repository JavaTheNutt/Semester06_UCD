//http://stackoverflow.com/documentation/vue.js/8726/plugins#t=201703170954259475386
export default {
	install(Vue, options) {
		function log(type, title, text) {
			console.log(`[${type}] ${title} - ${text}`);
		}

		Vue.prototype.$log = {
			error(title, text) {
				log('danger', title, text)
			},
			success(title, text) {
				log('success', title, text)
			},
			debug(title, text){
				log('debug', title, text)
			},
			log
		}
	}
}
