<template>
  <div class="app-sidebar__scroll-content">
    <div class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/"
        active-class=""
        exact-active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-home"></i>Home
      </nuxt-link>
      <a class="list-group-item" href="#">
        <i class="icon wb-order"></i>Artikel
      </a>
      <a class="list-group-item" href="#">
        <i class="icon wb-video"></i>Video
      </a>
      <a class="list-group-item" href="#">
        <i class="icon wb-grid-4"></i>Kategori
      </a>
      <a class="list-group-item" href="#">
        <i class="icon wb-users"></i>Minitutor
      </a>
    </div>

    <div v-if="($auth && !$auth.minitutor) || !$auth" class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/join-minitutor"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-dashboard"></i>Jadi Minitutor
      </nuxt-link>
    </div>

    <div v-if="$auth" class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/dashboard/me"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-user-circle"></i>Dasbor kamu
      </nuxt-link>
      <nuxt-link
        v-if="$auth.minitutor && $auth.minitutor.active"
        class="list-group-item"
        to="/dashboard/minitutor"
        active-class="active"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-dashboard"></i>Dasbor MiniTutor
      </nuxt-link>
    </div>

    <div v-if="!$auth" class="list-group">
      <nuxt-link
        class="list-group-item"
        to="/register"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-user-circle"></i>Daftar
      </nuxt-link>
      <nuxt-link
        class="list-group-item"
        to="/login"
        @click.native="$sidebar.display(false)"
      >
        <i class="icon wb-user-circle"></i>Masuk
      </nuxt-link>
    </div>
  </div>
</template>
