<template>
    <div>
        <button class="btn"><i class="fa fa-home"></i> Home</button>
        <button class="btn"><i class="fa fa-bars"></i> Menu</button>
        <button class="btn"><i class="fa fa-trash"></i> Trash</button>
        <button class="btn"><i class="fa fa-close"></i> Close</button>
        <button class="btn"><i class="fa fa-folder"></i> Folder</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>