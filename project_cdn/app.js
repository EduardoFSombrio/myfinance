const MyFinanceApp = {
    data() {
        return {
            name:"",
            input_name:""
        }
    },
    methods: {
        alter() {
            this.name = this.input_name
        }
    }
}

Vue.createApp(MyFinanceApp).mount("#app");