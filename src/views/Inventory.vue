<template>
    <div>
        <div class="md:w-10/12 md:mx-auto mb-5">
            <h1 class="text-5xl">Inventory</h1>
        </div>
        <div class="md:w-7/12 md:mx-auto mb-5 flex justify-between">
            <select v-model="params.color" @change="getCars()">
                <option value="">Color</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Silver</option>
            </select>
            <select v-model="params.make" @change="getCars()">
                <option value="">Make</option>
                <option>Ford</option>
                <option>DMC</option>
                <option>Plymouth</option>
            </select>
            <select v-model="params.model" @change="getCars()">
                <option value="">Model</option>
            </select>
            <select v-model="params.year" @change="getCars()">
                <option value="">Year</option>
            </select>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3.5 md:w-10/12 md:mx-auto">
            <div v-for="(car, index) in cars" :key="index">
                <img :src="car.photo" class="mb-5" alt="">
                <p>Make: {{ car.make }}</p>
                <p>Model: {{ car.model }}</p>
                <p>Year: {{ car.year }}</p>
                <p>Color:  {{ car.color }}</p>
                <router-link :to="{ name: 'inventory-details', params: { id: car.id }}">View</router-link>
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
                cars: [],
                params: {
                    color: '',
                    make: '',
                    model: '',
                    year: ''
                }
            }
        },
        methods: {
            getCars() {
                axios.get('https://laravel-used-cars.dev:8890/api/v1/cars', { params: this.params })
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