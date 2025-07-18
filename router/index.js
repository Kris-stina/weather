import { createRouter, createWebHistory } from 'vue-router';
import MyForm from '../src/components/MyForm.vue'; // Импортируем компонент MyForm
import Weather from '@/pages/Weather/TheWeather.vue';
import AppOld from '@/pages/AppOld.vue';
import WeatherId from '@/pages/Weather/WeatherId.vue';

const routes = [
  {
    path: '/form', //  URL, по которому будет доступна форма
    name: 'Form', //  Имя маршрута (опционально, но полезно)
    component: MyForm, //  Компонент, который будет отображаться
  },

  {
    path: '/weather/:id', //  URL, по которому будет доступна форма
    name: 'WeatherId', //  Имя маршрута (опционально, но полезно)
    component: WeatherId, //  Компонент, который будет отображаться
  },

  {
    path: '/weather', //  URL, по которому будет доступна форма
    name: 'Weather', //  Имя маршрута (опционально, но полезно)
    component: Weather, //  Компонент, который будет отображаться
  },

  {
    path: '/app-old', //  URL, по которому будет доступна форма
    name: 'AppOld', //  Имя маршрута (опционально, но полезно)
    component: AppOld, //  Компонент, который будет отображаться
  },
  //  Добавьте здесь другие маршруты, если они понадобятся
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
