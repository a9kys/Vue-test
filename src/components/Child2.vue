<template>
    <div id="child2">
        <div class="header">
            This is the header content to be replaced by parent
            <slot name="parent-header-slot"></slot>
        </div>
        <div class="body">
            This is the body content to be replaced by parent
            <slot name="parent-body-slot"></slot>
        </div>
    </div>
</template>
<style>
.header {
    margin:20px;
    background: beige;
    min-height: 50px;
}
.body{
    margin:20px;
    background: lightblue;
    min-height: 50px;
}
</style>

