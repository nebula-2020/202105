<template>
    <div class="container">
        <div class="text-box">{{text}}</div>
        <div class="underline"></div>
    </div>
</template>

<script>
    export default {
        name: 'ToolBarItem',
        props: {
            text: {
                type: String,
                default:"缺失值"
            }
        }
    };
</script>

<style scoped>
    div {
        font: inherit;
        color: inherit;
    }

    .container {
        padding: 0 1% 5px 1%;
        text-align: center;
        cursor: pointer;
    }

    .underline {
        content: "";
        position: absolute;
        bottom: 0;
        display: block;
        height: 5px;
        background-color: var(--color);
    }

    .underline-hover {
        width: 0%;
        left: 50%;
        transition: width 1s ease-in,left 1s ease-in;
    }

        .underline-hover:hover {
            width: 110%;
            left: -5%;
            transition: width 0.25s ease-out,left 0.25s ease-out;
        }
</style>