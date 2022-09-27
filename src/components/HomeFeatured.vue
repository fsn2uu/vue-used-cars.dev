<template>
    <div>
        <div class="md:w-10/12 md:mx-auto mb-5">
            <h1 class="text-5xl text-center">Featured Inventory</h1>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3.5 md:w-10/12 md:mx-auto">
            <div v-for="(car, index) in cars" :key="index">
                <img :src="car.photo" class="mb-5" alt="">
                <p>{{ car.year }} {{ car.make }} {{ car.model }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'Inventory',
        data() {
            return {
                cars: []
            }
        },
        methods: {
            getCars() {
                axios.get('https://laravel-used-cars.dev:8890/api/v1/cars?featured=1')
                    .then(res => {
                        this.cars = res.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        mounted() {
            this.getCars()
        },
    }
</script>