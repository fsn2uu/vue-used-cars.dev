<template>
    <div class="w-10/12 mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div v-for="(post, index) in posts" :key="index">
                <div class="h-[210px] w-[315px] overflow-hidden">
                    <img
                    v-if="post._embedded['wp:featuredmedia']"
                    :src="post._embedded['wp:featuredmedia'][0].source_url"
                    class="mb-3.5"
                    />
                    <img
                    v-if="!post._embedded['wp:featuredmedia']"
                    src="//via.placeholder.com/315x210"
                    class="mb-3.5"
                    />
                </div>
                <h2 class="text-4xl mb-3.5" v-html="post.title.rendered"></h2>
                <div v-html="post.excerpt.rendered"></div>
            </div>
        </div>
        <div class="mt-6 w-full">

            <nav aria-label="Page navigation" class="">
                <ul class="inline-flex -space-x-px">
                    <li>
                        <a href="#" class="py-2 px-3 ml-0 leading-tight bg-white rounded-l-lg border border-gray-300 hover:text-white hover:bg-purple-600">Older Posts</a>
                    </li>
                    <li>
                        <a href="#" class="py-2 px-3 leading-tight bg-white rounded-r-lg border border-gray-300 hover:text-white hover:bg-purple-600">Newer Posts</a>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Blog',
        data() {
            return {
                postsUrl: process.env.VUE_APP_BLOG_API_URL,
                queryOptions: {
                    per_page: 20,
                    page: 1,
                    _embed: true
                },
                posts: []
            }
        },
        methods: {
            getPosts() {
                axios.get(this.postsUrl, { params: this.queryOptions })
                    .then(res => {
                        this.posts = res.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        mounted() {
            this.getPosts();
        }
    }
</script>