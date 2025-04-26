<template>
    <div class="container">
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addcatelogy" >
                Thêm danh mục
            </button>
            <div class="modal fade" id="addcatelogy" data-bs-backdrop="static">
                <div class="modal-dialog" >
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Thêm danh mục</h4>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form action="#">
                            <div class="mt-3 mb-3">
                                <label for="text" class="form-label">Từ khóa</label>
                                <input type="text" class="form-control" id="keyword" placeholder="Nhập từ khóa">
                            </div>
                            <div class="mt-3 mb-3">
                                <label for="text" class="form-label">Tên danh mục</label>
                                <input type="text" class="form-control" id="tendanhmuc" placeholder="Nhập tên danh mục">
                            </div>
                            <div class="mb-3">
                                <label for="text" class="form-label">Mô tả</label>
                                <textarea class="form-control" id="motadanhmuc" rows="4" placeholder="Nhập mô tả danh mục"></textarea>
                            </div>
                        </form>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Xác nhận</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- The Modal -->
        
        <table class="table table-hover table-bordered mt-3">
            <thead class="table-secondary" >
                <tr>
                    <th>STT</th>
                    <th>Tên danh mục</th>
                    <th>Mô tả</th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-for="(category, index) in categorys" :key="category.id" class="table-row">
                <tr>
                    <td>{{ index + 1 }}</td>
                    <td>{{ category.name }}</td>
                    <td>{{ category.description }}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="btn btn-outline-primary me-1" >Sửa</button>
                            <button class="btn btn-outline-danger" @click="removeCategory(category.id)">Xóa</button>
                        </div>
                        
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>

</template>
    
<script setup>
import { ref } from 'vue'


const categorys = ref([
    {
        id: 1,
        name: 'Danh mục 1',
        description: 'Mô tả danh mục 1',
    },
    {
        id: 2,
        name: 'Danh mục 2',
        description: 'Mô tả danh mục 2',
    },
    {
        id: 3,
        name: 'Danh mục 3',
        description: 'Mô tả danh mục 3',
    },
    {
        id: 4,
        name: 'Danh mục 4',
        description: 'Mô tả danh mục 4',
    },
    {
        id: 5,
        name: 'Danh mục 5',
        description: 'Mô tả danh mục 5',
    },
    {
        id: 6,
        name: 'Danh mục 6',
        description: 'Mô tả danh mục 6',
    },
    {
        id: 7,
        name: 'Danh mục 7',
        description: 'Mô tả danh mục 7',
    },
    {
        id: 8,
        name: 'Danh mục 8',
        description: 'Mô tả danh mục 8',
    },
    {
        id: 9,
        name: 'Danh mục 9',
        description: 'Mô tả danh mục 9',
    },
    {
        id: 10,
        name: 'Danh mục 10',
        description: 'Mô tả danh mục 10',
    },
    {
        id: 11,
        name: 'Danh mục 11',
        description: 'Mô tả danh mục 11',
    },
    {
        id: 12,
        name: 'Danh mục 12',
        description: 'Mô tả danh mục 12',
    },
    {
        id: 13,
        name: 'Danh mục 13',
        description: 'Mô tả danh mục 13',
    },
    {
        id: 14,
        name: 'Danh mục 14',
        description: 'Mô tả danh mục 14',
    },
    {
        id: 15,
        name: 'Danh mục 15',
        description: 'Mô tả danh mục 15',
    },
    {
        id: 16,
        name: 'Danh mục 16',
        description: 'Mô tả danh mục 16',
    },
    {
        id: 17,
        name: 'Danh mục 17',
        description: 'Mô tả danh mục 17',
    },
    {
        id: 18,
        name: 'Danh mục 18',
        description: 'Mô tả danh mục 18',
    },
])

const removeCategory = (id) => {
    const index = categorys.value.findIndex((category) => category.id === id)
    if (index !== -1) {
        categorys.value.splice(index, 1)
    }
}


</script>

<style scoped> 
.action-buttons {
    display: none;
}

.table-row:hover .action-buttons {
    display: inline-block;
}

/* Đặt kích thước cố định cho cột Hành động */
th:nth-child(4), td:nth-child(4) {
    width: 150px;
    text-align: center;
}
</style>