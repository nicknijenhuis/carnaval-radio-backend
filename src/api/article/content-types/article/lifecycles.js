export default {
    async beforeCreate(event) {
        const { data } = event.params;

        data.Date = new Date().toISOString().substring(0, 10);
    },
}