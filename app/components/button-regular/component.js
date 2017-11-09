import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		toggleResume(){

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				window.open('resume/Resume.pdf'); 
			}else{
				this.toggleProperty('toggleResume')
			}
		}
	}
});
