<template>
    <component :is="tag" :class="size">
        <slot/>
    </component>
</template>

<script>
    export default {
        name: "CustomText",
        props: {
            tag: {
                type: String,
                default: "span"
            },
            size: {
                type: String,
                default: "normal", //normal: 14, small:12, xsmall:11, xxsmall:10
                validator: function (value) {
                    // The value must match one of these strings
                    return ['normal', 'small', 'xsmall', 'xxsmall'].indexOf(value) !== -1
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    .normal {
        font-size: 14px;
    }
    .small {
        font-size: 12px;
    }
    .xsmall {
        font-size: 11px;
    }
    .xxsmall {
        font-size: 10px;
    }
</style>