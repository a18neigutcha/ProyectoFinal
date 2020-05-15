<template>
    <footer class="bg-light">

        <nav class="nav flex-column ml-5">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </nav>


        <ul class="nav nav-pills ml-5">
            <div class="col-8 pl-0">
                <li class="nav-item">
                    <a class="nav-link" href="#">Politica de privacidad</a>
                </li>
            </div>
            <div class="col-4 pl-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">ES</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">ES</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">EN</a>
                    </div>
                </li>
            </div>
                
        </ul>
    </footer>
</template>

<script>

export default {
  name: 'Footer',
  components: {

  }
}
</script>

<style>

</style>
