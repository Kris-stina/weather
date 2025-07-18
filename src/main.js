import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/index'; //  Импортируем наш сконфигурированный router




const app = createApp(App);


app.use(router); //  Подключаем router к приложению Vue

app.mount('#app');
