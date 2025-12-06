(async function() {
    try {
        const res = await fetch("https://equicord.org/version");
        const version = (await res.text()).trim();

        document.querySelectorAll("a[data-filename]").forEach(function(btn) {
            var template = btn.dataset.filename;
            var filename = template.replace(/VERSION/g, version);
            btn.href = "https://github.com/Equicord/Equibop/releases/download/v" + version + "/" + filename;
        });
    } catch (e) {
        console.error("Failed to fetch version:", e);
        document.querySelectorAll("a[data-filename]").forEach(function(btn) {
            btn.href = "https://github.com/Equicord/Equibop/releases/latest";
        });
    }
})();
