<template>
    <div class="w-10/12 mx-auto">
        <h1 class="text-5xl mb-5">{{ car.year }} {{ car.make }} {{ car.model }}</h1>
        <div class="flex flex-cols-2">
            <div class="w-1/2 md:pr-10">
                <p>Year: {{ car.year }}</p>
                <p>Make: {{ car.make }}</p>
                <p>Model: {{ car.model }}</p>
                <p>Color: {{ car.color }}</p>
            </div>
            <img :src="car.photo" class="w-1/2" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                params: {
                    id: this.$route.params.id
                },
                car: {}
            }
        },
        methods: {
            getCar() {
                axios.get('https://laravel-used-cars.dev:8890/api/v1/cars', { params: this.params })
                    .then(res => {
                        this.car = JSON.parse(JSON.stringify(res.data))[0]
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        mounted(){
            this.getCar()
        }
    }
</script>
  