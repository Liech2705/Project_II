<template>
  <div class="container border-top border-3 border-primary rounded-top">
    <table class="table mt-3 table-hover table-striped">
        <thead>
            <tr class="table-primary">
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>Tác giả</th>
                <th>Chuyên mục</th>
                <th>Thẻ</th>
                <th><i class="fa-solid fa-comment"></i></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in news" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.author }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.tag }}</td>
                <td>{{ item.comments }}</td>
                <td>
                    <a href="#" class="text-danger" data-bs-toggle="modal" data-bs-target="#deleteNews">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="modal fade" id="deleteNews" tabindex="-1" aria-labelledby="deleteNewsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteNewsLabel">Xóa bài viết</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Bạn có chắc chắn muốn xóa bài viết này không?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script setup>
    import { ref } from 'vue'

    const news = ref([
        {
            title: 'Tiêu đề 1',
            author: 'Tác giả 1',
            category: 'Kinh tế',
            tag: 'Kinhte' + ',' + 'video',
            comments: 5,
        },
        {
            title: 'Tiêu đề 2',
            author: 'Tác giả 2',
            category: 'Công nghệ',
            tag: 'Congnghe' + ',' + 'video',
            comments: 3,
        },

    ])

</script>

<style scoped>
    th{
        width: 100px;
    }
</style>