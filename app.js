(function () {
  var SOURCE = 'webcam_site';
  var PACKAGE = 'com.stream.webcam';
  var HOME_DIRS = ['fr', 'es', 'webcam', 'de', 'pt-br'];
  function campaign() {
    var parts = window.location.pathname.split("/").filter(Boolean);
    var page = parts[parts.length - 1] || "";
    var inGuides = parts.indexOf("guides") !== -1 || page === "guides.html";
    if (!page || HOME_DIRS.indexOf(page) !== -1 || page === "index.html") {
      return inGuides ? "guide_hub" : "site_home";
    }
    var slug = page.replace(/\.html$/, "");
    if (slug === "privacy") return "site_privacy";
    if (slug === "data-deletion") return "site_data_deletion";
    if (inGuides || page === "guides.html") {
      if (slug === "guides") return "guide_hub";
      return "guide_" + slug.replace(/-/g, "_");
    }
    return "site_" + slug.replace(/-/g, "_");
  }
  var url = new URL("https://play.google.com/store/apps/details?id=" + PACKAGE);
  url.searchParams.set(
    "referrer",
    "utm_source=" + SOURCE + "&utm_medium=organic&utm_campaign=" + campaign()
  );
  document.querySelectorAll('a[href*="play.google.com/store/apps/details"]').forEach(function (a) {
    a.href = url.toString();
  });
})();

// Minimal: keep the footer year current. The site is otherwise static for speed + SEO.
document.querySelectorAll('#y').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

