<script setup>
const script = []

useHead({ script })
const msg = ref('')
function printContent() {
    const content = `
                <div style="text-align: center;">
                    <p style="font-size: 12px;">
                        <strong>Digital Bangsamoro</strong>
                    </p>
                    <p style="font-size: 12px;">Welcome, You are currently in the Queue</p>
                    <p style="font-size: 12px;">Your Token Number:</p>
                    <p style="font-size: 18px;"><strong>12345</strong></p>
                    <p style="font-size: 12px;">Please wait for your turn</p>
                    <p style="font-size: 12px;">Thank you</p>
                </div>
            `;
    try {
        if (window.Android && window.Android.printContent) {
            msg.value = 'Android interface available';
            window.Android.printContent(content);
        } else {
            msg.value = 'Android interface not available';
        }
    } catch (e) {
        msg.value = 'Android interface not available catch';
    }

}
</script>
<template>
    <div style="display: flex; align-items: center; justify-content: center;">
        <button @click="printContent">Print 3</button>
        <p>{{ msg }}</p>
    </div>
</template>
