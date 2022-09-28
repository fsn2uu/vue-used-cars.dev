<template>
    <div class="w-10/12 mx-auto">
        <h1 class="text-5xl mb-5">{{ title || '' }}</h1>
        <div class="flex flex-cols-2">
            <div class="w-1/2 md:pr-10" v-html="content">
            </div>
            <div v-if="img_src" class="w-1/2 order-1 md:order-2">
                <img :src="img_src" class="" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        data() {
            return {
                params: {
                    slug: this.$route.params.slug
                },
                post: {
                    type: [Object, Array],
                    default: () => {},
                },
                title: '',
                content: '',
                img_src: '',
            }
        },
        methods: {
            getPost() {
                axios.get(process.env.VUE_APP_BLOG_API_URL, { params: this.params })
                    .then(res => {
                        //console.log(JSON.parse(JSON.stringify(res.data[0])))
                        this.post = JSON.parse(JSON.stringify(res.data[0]))
                        this.title = JSON.parse(JSON.stringify(res.data[0].title.rendered))
                        this.content = JSON.parse(JSON.stringify(res.data[0].content.rendered))
                        this.img_src = JSON.parse(JSON.stringify(res.data[0].featured_image_src_large[0]))
                        //this.post = JSON.parse(JSON.stringify({...post}))
                        //console.log(this.post)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        mounted(){
            this.getPost()
        }
    }
</script>
  