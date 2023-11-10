module.exports = {
    async beforeCreate(event) {
        console.log(event);
        event.params.data.Date = new Date().toISOString().substring(0, 10);
    },
}