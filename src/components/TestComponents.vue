<template>
    <h1>Hello world {{ test2 }}</h1>

    <!-- Отображает счетчик и позволяет увеличивать его при клике. -->
    <h2 @click="calc" class="counter"> {{ counter }}</h2>

    <!-- Отображает prop propMessage, переданный от родительского компонента. -->
    <h3>{{ props.propMessage }}</h3>

    <!-- Генерирует событие emitValue при клике. -->
    <h4 @click="emitValue">Передавать значение родителю</h4>

    <!-- Создание кнопки, генерирующей событие resetCounter. -->
    <button @click="resetCounter">Сбросить счетчик</button>



</template>


<script setup>

/* Импортируем необходимые функции из Vue. */
import { computed, ref, defineProps, defineEmits } from 'vue';


/* Определяем props, которые компонент будет принимать от родителя. */
const props = defineProps({
    propMessage:{                          /* проп для строки сообщения */
        type: String,                      /* Тип данных-строка */
        required: true,                    /* Обязательный проп */
    }
})

/* Определяем события, которые компонент может генерировать и передавать родителю. */
const emit = defineEmits(['custom-event', 'reset-event']);
let test="Привет"                          /* Строка test. */
let test3="Привет, Кристина."              /* Строка test3. */
let counter=ref(0)                         /* Счетчик ref для отслеживания изменений. */

/* Функция для изменения занчения переменной test3. */
function myFunction() {
test3=" Кристина."                         /* Присваиваем новое значение переменной test3. */
}
myFunction()

/* Вычисляемое свойство, возвращающее конкатенацию test и test3. */
let test2=computed(()=>{
    return test + test3                    /* Возвращаем сумму строк test и test3. */
})

/* Функция для увеличения значения счетчика. */
function calc() {
    counter.value +=1                      /* Увеличиваем значение счетчика на 1. */
}

/* Функция для генерации события custom-event и передачи значения счетчика родителю. */
const emitValue = () => {
    emit('custom-event', counter.value);              /* Генерируем событие 'custom-event' и передаем значение 'counter'. */
}

/* Функция для сброса счетчика и генерации события reset-event. */
const resetCounter = () => {
    counter.value = 0;                     /* Сбрасываем занчение счетчика в 0. */
    emit('reset-event')                    /* Генерируем событие 'reset-event'. */
}
</script>


<style>

/* Стили для элемента с классом "counter". */
.counter {
    cursor: pointer;                       /* Курсор в виде указателя при наведении */
    color: green;                        /* Цвет */
}
</style>
