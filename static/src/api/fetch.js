export default {
  install(Vue, store){

    var local = store.state;

    Vue.prototype.$fetch= {
      // Basic POST fetching to server
      alert(asd){
        window.alert(asd);
        return
      },

      post(address, payload){

        local.system.display_mode = 'light';
        return fetch(`${address}`,{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify(payload)
        }).then(res=>res.json())
      },
    }
    // End of fetch


  }
}
