<template>
    <div class="slider flex flex-row">
        <img :src="`${publicPath}assets/car.png`" alt="" class="scale-x-[-1] w-3/4 -mt-20 -mb-20">
        <div class="mr-16 mt-5">
            <h1 class="text-5xl mb-5">Karl has what you're looking for!</h1>
            <p class="mb-5">Find the car you've been waiting for today!  Visit our lot or click below to contact us and let us help you find the car of your dreams today.</p>
            <!-- <div class="mt-5">
                <a href="" class="bg-purple-600 text-white px-5 py-8 mt-2">Buy It Now!</a>
            </div> -->
            <button class="bg-purple-600 text-white px-4 py-5 mt-2 float-right">Search now!</button>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          publicPath: process.env.BASE_URL
        }
      }
    }
  </script>