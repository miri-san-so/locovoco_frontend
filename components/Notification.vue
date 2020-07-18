<template>
    <div>
        <ul
            ref="notifications"
            v-for="(notification, i) in notifications"
            :key="i"
        >
            <notification-chip
                :text="notification.text"
                :error="notification.error"
                @remove="this.$refs.notifications.removeChild(chip)"
            />
        </ul>
    </div>
</template>

<script>
import NotificationChip from "./NotificationChip.vue";
export default {
    name: "Notification",
    components: { NotificationChip },
    data() {
        return {
            notifications: [{ error: true, text: "no token found" }]
        };
    }
};
</script>

<style scoped>
ul {
    position: absolute;
    bottom: 0.3rem;
    left: 0.3rem;
    padding: 0 0 1rem 0.3rem;
}
</style>
