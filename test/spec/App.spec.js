import Vue from 'vue';
import App from "../../src/App.vue";


describe('App.vue', () => {

  console.log(App)

  it('should have a <Sidebar/> component', () => {
    expect(App.components).to.include.keys('Sidebar');
  })

  it('should have an empty contacts array', () => {
    expect(App.data().contacts).to.be.a('array');
    expect(App.data().contacts).to.have.length(0);
  })

  it('has a .beforeMount hook', () => {
    expect(App.beforeMount).to.exist;
    var spy1 = sinon.spy();

    // console.log(App.beforeMount())
  })

  // const Ctor = Vue.extend(App)
  // const vm = new Ctor().$mount()

});
