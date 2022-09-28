<template>
    <nav class="pagination mt-10 text-center">
        <span class="mr-5">{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</span>

        <ul class="inline-flex -space-x-px">
            <li>
                <a v-if="pagination.prevPage" @click="$emit('prev')" class="py-2 px-3 ml-0 leading-tight bg-white rounded-l-lg border border-gray-300 hover:text-white hover:bg-purple-600">
                    Older Posts
                </a>
                <a class="py-2 px-3 leading-tight bg-white rounded-l-lg border border-gray-300 hover:text-white hover:bg-purple-600" v-else disabled>
                    Older Posts
                </a>
            </li>
            <li>
                <a v-if="pagination.nextPage" @click="$emit('next')" class="py-2 px-3 leading-tight bg-white rounded-r-lg border border-gray-300 hover:text-white hover:bg-purple-600">Newer Posts</a>
                <a class="py-2 px-3 leading-tight bg-white rounded-r-lg border border-gray-300 hover:text-white hover:bg-purple-600" v-else disabled>
                    Newer Posts
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: ['pagination'],
    }
</script>