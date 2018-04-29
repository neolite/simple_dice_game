// import Vue from './vue.esm.browser.js'
import dummy from './components/dummy.js'

//Vue.component('lib', lib);

document.addEventListener("DOMContentLoaded", () => { 

	new Vue({
		template: '<div>{{ hi }}<dummy/></div>',
        el: '#app',
        components: {
            dummy
        },
		data: {
			hi: 'Hello from modules'
		}
	});

});


