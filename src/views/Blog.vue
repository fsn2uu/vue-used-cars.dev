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

            <Pagination :pagination="pagination"
            @prev="--queryOptions.page; getPosts();"
            @next="queryOptions.page++; getPosts();"
             />

        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Pagination from "../components/Pagination.vue"

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
                pagination: {
                    prevPage: '',
                    nextPage: '',
                    totalPages: '',
                    from: '',
                    to: '',
                    total: '',
                },
                posts: []
            }
        },
        components: {
    "Pagination": Pagination,
    Pagination
},
        methods: {
            getPosts() {
                axios.get(this.postsUrl, { params: this.queryOptions })
                    .then(res => {
                        this.posts = res.data
                        this.configPagination(res.headers)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            configPagination(headers) {
                this.pagination.total = +headers['x-wp-total']
                this.pagination.totalPages = +headers['x-wp-totalpages']
                this.pagination.from = this.pagination.total ? ((this.queryOptions.page - 1) * this.queryOptions.per_page) + 1 : ' '
                this.pagination.to = (this.queryOptions.page * this.queryOptions.per_page) > this.pagination.total ? this.pagination.total : this.queryOptions.page * this.queryOptions.per_page
                this.pagination.prevPage = this.queryOptions.page > 1 ? this.queryOptions.page : ''
                this.pagination.nextPage = this.queryOptions.page < this.pagination.totalPages ? this.queryOptions.page + 1 : ''
            }
        },
        mounted() {
            this.getPosts();
        }
    }
</script>