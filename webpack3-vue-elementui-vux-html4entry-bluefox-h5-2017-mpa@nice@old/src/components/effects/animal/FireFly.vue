<template>
    <div>
        <!-- 萤火虫 -->
        <div class="ice-firefly" style="position: fixed; bottom: 35px; right: 22px;">

            <input class="firefly__checkbox"
                   id="thisice_firefly"
                   type="checkbox">
            <label class="firefly__body" for="thisice_firefly">
                <div class="firefly__abdomen">
                    <div class="firefly__thorax">
                        <div class="firefly__head">
                            <div class="firefly__eyes"></div>
                            <div class="firefly__antennae"></div>
                        </div>
                    </div>
                    <div class="firefly__wings">
                        <div class="firefly__wing firefly__wing--a"></div>
                        <div class="firefly__wing firefly__wing--b"></div>
                    </div>
                </div>
            </label></div>

    </div>
</template>

<script>

    import Lib from 'libs/vux';
    // import $ from 'jquery'

    export default {
        data() {
            return {}
        },
        components: {},

        //已成功挂载，相当ready()
        mounted() {

        },
        //相关操作事件
        methods: {}
    }
</script>

<style lang="less" scoped>


    // 萤火虫
    .ice-firefly {
        width: 60px;
        z-index: 1;
        transform: rotate(-90deg);

        position: fixed;
        bottom: 35px;
        right: 22px;

        &:after {
            content: '';
            display: block;
            padding-top: 50%;
        }

        // 点击按钮
        .firefly__checkbox {
            display: none;

            // 被点击后
            &:checked ~ .firefly__body {

                .firefly__abdomen {
                    background: #27231e;
                    box-shadow: inset 0 0 1.5rem rgba(150, 0, 0, 0.75);
                    animation: ice-firefly-flicker 4000ms ease infinite;
                }

                // 展开翅膀
                .firefly__wing--a {
                    transform: rotate(30deg);
                }

                .firefly__wing--b {
                    transform: rotate(-30deg);
                }

            }

        }

        .firefly__head {
            position: absolute;
            top: 15%;
            left: 60%;
            bottom: 15%;
            background: #27231e;
            width: 70%;
            border-radius: 40% 80% 80% 40%;
            box-shadow: inset -0.1rem 0 0 0.3rem rgba(14, 10, 10, 0.2);
        }

        .firefly__eyes {
            position: absolute;
            top: -5%;
            right: 10%;
            bottom: -5%;
            width: 35%;

            &:before,
            &:after {
                content: '';
                display: block;
                position: absolute;
                right: 0;
                width: 100%;
                box-sizing: border-box;
                border-radius: 100%;
                background: #0e0a0a;
                padding-top: 100%;
            }

            &:before {
                top: 0;
            }

            &:after {
                bottom: 0;
            }

        }

        .firefly__antennae {
            position: absolute;
            top: 20%;
            left: -150%;
            bottom: 20%;
            width: 400%;
            z-index: -1;

            &:before,
            &:after {
                content: '';
                display: block;
                position: absolute;
                right: 0;
                width: 100%;
                box-sizing: border-box;
                border-color: #0e0a0a;
                border-style: solid;
                padding-top: 65%;
                border-width: .25rem .25rem .25rem 0;
            }

            &:before {
                top: 80%;
                border-radius: 0 100% 100% 100%;
            }

            &:after {
                bottom: 80%;
                border-radius: 100% 100% 100% 0;
            }
        }

        .firefly__thorax {
            position: absolute;
            top: 0;
            left: 100%;
            bottom: 0;
            background: #d43b1f;
            width: 30%;
            border-radius: 20% 80% 80% 20%;
            box-shadow: inset -0.1rem 0 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
        }

        .firefly__abdomen {
            position: absolute;
            top: 10%;
            right: 20%;
            bottom: 10%;
            background: #27231e;
            width: 100%;
            transition: all 1000ms ease;
            border-radius: 100% 30% 30% 100%;
            box-sizing: border-box;

            &:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: repeating-linear-gradient(90deg, transparent 0, transparent 15%, rgba(0, 0, 20, 0.1) 15%, rgba(0, 0, 20, 0.1) 20%);
                mix-blend-mode: multiply;
                border-radius: 100% 30% 30% 100%;
                z-index: 0;
                box-shadow: inset -1rem 0 0.2rem 0.3rem rgba(0, 0, 0, 0.1);
            }

        }

        .firefly__wings {
            position: absolute;
            top: -20%;
            right: 0;
            bottom: -20%;
            left: -5%;
            z-index: 1;

            .firefly__wing {
                position: absolute;
                right: 0;
                background: repeating-linear-gradient(#27231e 0%, #27231e 40%, #191613 40%, #191613 60%);
                width: 100%;
                height: 50%;
                transition: all 200ms ease-out;
                border: 1px solid #40341d;
                box-sizing: border-box;
                box-shadow: inset 0.2rem 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);

                &.firefly__wing--a {
                    transform-origin: bottom right;
                    top: 0;
                    border-radius: 90% 30% 0 20%;
                }

                &.firefly__wing--b {
                    transform-origin: top right;
                    top: 50%;
                    border-radius: 20% 0 30% 90%;
                }

            }

        }

    }

    // 动画
    @keyframes ice-firefly-flicker {
        0%, 100% {
            background: #fefa01;
            box-shadow: 0 0 1rem #fefa01, inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
        }
        30%, 70% {
            background: #fffd99;
            box-shadow: -1rem 0 8rem 1rem #fefa01, inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
        }
        50% {
            box-shadow: -1rem 0 8rem 1rem rgba(254, 250, 1, 0.8), inset -0.25rem 0 0 0.5rem rgba(14, 10, 10, 0.1);
        }
    }
</style>
