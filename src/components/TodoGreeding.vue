<template>
    <div class="TodoGreeding">
        <p class="greeding_message">{{ greedingMsg }}</p>
        <p class="ask_message">{{askMsg}}</p>
        <label for="user-name">Name<span class="icon-right-small"></span></label>
        <input
            class="input_username"
            type="text"
            id="nickname" 
            placeholder="Enter your nickname" 
            v-model="nickname"
            v-on:keyup.enter="writeNickname"
            required autofocus
        >
    </div>
</template>
<script>
export default {
    data() {
        return {
            nickname: "Loem",
            greedingMsg: "Welcome!",
            askMsg: "What is your nickname?"
        }
    },
    methods: {
        writeNickname: function () {
            this.$emit("addUser", this.nickname);
        }
    }
}
</script>
<style lang="scss">
.TodoGreeding {
    font-size:1.2em;

    .greeding_message {
        font-size:1.5em;
        font-weight:600;
    }
    .ask_message {
        font-weight:200;
        margin-bottom: 1em;
        line-height:28px;
    }
    .input_username {
        margin-left: 10px;
        border: 0px;
        border-bottom: 1px dotted gray;
        color: white;
        background-color: inherit;
    }
    .input_username::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
}
</style>