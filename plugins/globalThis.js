export default defineNuxtPlugin(() => {
    if (typeof globalThis === 'undefined') {
        Object.defineProperty(Object.prototype, 'globalThis', {
            get: function () {
                return this;
            },
            configurable: true,
        });
    }
});
