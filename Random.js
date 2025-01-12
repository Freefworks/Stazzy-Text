var sites = [
'text-1.html', 
'text-2.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}