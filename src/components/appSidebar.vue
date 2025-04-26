<template>
  <div class="wrapper d-flex">
    <!-- Sidebar -->
    <aside id="sidebar" :class="{ expand: isExpand }" class="vh-100">
      <div class="d-flex align-items-center">
        <button class="toggle-btn btn me-2" @click="toggleSidebar">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="sidebar-logo">
          <router-link to="/" class="text-light text-decoration-none">Báo HEL</router-link>
        </div>
      </div>
      <ul class="sidebar-nav">
        <li class="sidebar-item">
          <router-link :to="{ name: 'catelogy' }" class="sidebar-link text-decoration-none">
            <i class="fa-solid fa-tags"></i>
            <span>Doanh mục</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link :to="{ name: 'account_manager'}" class="sidebar-link text-decoration-none">
            <i class="fa-solid fa-users"></i>
            <span>Tài Khoản</span>
          </router-link>
        </li>
        
        <li class="sidebar-item">
          <router-link :to="{ name: 'newspaper_manager'}" class="sidebar-link text-decoration-none">
            <i class="fa-solid fa-newspaper"></i>
            <span>Bài viết</span>
          </router-link>
        </li>
      </ul>
      <div class="sidebar-footer">
        <router-link to="#" class="sidebar-link text-decoration-none">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Đăng xuất</span>
        </router-link>
      </div>
    </aside>
    <nav class="navbar navbar-expand-sm  bg-primary fixed-top border-bottom" id="navbar">
      <div class="container-fluid d-flex justify-content-end align-items-center">
        <button class="nav-notifi btn btn-outline-dark btn-primary me-2" title="Thông báo" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Content">
          <i class="fa-regular fa-bell"></i>
          <span class="badge bg-danger">{{ notif }}</span>
        </button>
        <router-link class="navbar-brand" to="/">
            <img src="@/assets/image/admin.png" alt="" class="img-fluid rounded-circle border-black" style="width: 2.45rem; height: 2.45rem;">
        </router-link> 
      </div>
    </nav>
    <!-- Main Content -->
    <div class="main flex-grow-1 p-3" :class="{ 'main-expanded': isExpand }">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { Popover } from 'bootstrap';
import { RouterLink } from 'vue-router';

const isExpand = ref(false);
const toggleSidebar = () => {
  isExpand.value = !isExpand.value;
};
const notif = ref(4)
onMounted(() => {
    const popoverTrigger = document.querySelector('.nav-notifi');
    new Popover(popoverTrigger, {
    content: `
    <div>
      <p class="text-center">Bạn đã nhận được một thông báo <a href="#" class="d-flex  align-items-center text-decoration-none  mb-2">
            <i class="fa-solid fa-bell me-2"></i>
            <span>link</span>
        </a></p>
        
        <a href="#" class="text-decoration-none  mb-2">
            <i class="fa-solid fa-bell me-2"></i>
            <span>Thông báo 2</span>
        </a>
    </div>
    `,
    html: true, // Cho phép nội dung HTML
    placement: 'bottom', // Vị trí popover
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

nav{
    position: fixed;
    height: 4rem;
    width: 100%;
    z-index: 999;
    border-bottom: 10px solid #ffffff;
}



li {
    list-style: none;
}

h1 {
    font-weight: 600;
    font-size: 1.5rem;
}

body {
    font-family: 'Poppins', sans-serif;
}

.main {
    min-height: 100vh;
    width: 100%;
    margin-left: 70px;
    overflow: hidden;
    transition: margin-left 0.35s ease;
    background-color: #fafbfe;
}

.main-expanded {
  transition: margin-left 0.35s ease;
  margin-left: 260px; /* Khoảng cách bằng chiều rộng của sidebar mở rộng */
}

#sidebar {
    position: fixed;
    width: 70px;
    min-width: 70px;
    height: 100vh;
    z-index: 1000;
    transition: all .25s;
    background-color: #0e2238;
    display: flex;
    flex-direction: column;
}

#sidebar.expand {
    width: 260px;
    min-width: 260px;
}

.toggle-btn {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    padding: 1rem 1.5rem;
}

.toggle-btn i {
    font-size: 1.5rem;
    color: #FFF;
}

.sidebar-logo {
    margin: auto 0;
}

.sidebar-logo router-link {
    color: #FFF;
    font-size: 1.15rem;
    font-weight: 600;
}

#sidebar:not(.expand) .sidebar-logo,
#sidebar:not(.expand) .sidebar-link span {
    display: none;
}

.sidebar-nav {
    padding: 2rem 0;
    flex: 1 1 auto;
}

.sidebar-link {
    padding: .625rem 1.625rem;
    color: #FFF;
    display: block;
    font-size: 0.9rem;
    white-space: nowrap;
    border-left: 3px solid transparent;
}

.sidebar-link i {
    font-size: 1.1rem;
    margin-right: .75rem;
}

.sidebar-link:hover {
    background-color: rgba(255, 255, 255, .075);
    border-left: 3px solid #3b7ddd;
}

.sidebar-item {
    position: relative;
}

#sidebar:not(.expand) .sidebar-item .sidebar-dropdown {
    position: absolute;
    top: 0;
    left: 70px;
    background-color: #0e2238;
    padding: 0;
    min-width: 15rem;
    display: none;
}

#sidebar:not(.expand) .sidebar-item:hover .has-dropdown+.sidebar-dropdown {
    display: block;
    max-height: 15em;
    width: 100%;
    opacity: 1;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"]::after {
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
    transform: rotate(-135deg);
    transition: all .2s ease-out;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"].collapsed::after {
    transform: rotate(45deg);
    transition: all .2s ease-out;
}

.sidebar-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
}
</style>

