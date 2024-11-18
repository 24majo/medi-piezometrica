// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    // Si necesitas agregar configuraciones adicionales
    config.resolver.assetExts.push("db"); // Ejemplo si necesitas usar archivos con extensión .db

    return config;
})();
