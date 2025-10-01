// Archivo de configuración
const CONFIG = {
    // Accede a la variable de entorno de GitHub a través de process.env
    API_URL: import.meta.env.URL_API
};

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
