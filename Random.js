var sites = [
'text-1.html', 
'text-2.html',
'text-3.html',
'text-4.html'
]; function randomSite() {var i = parseInt(Math.random() * sites.length); location.href = sites[i];}