const fs = require('fs'); 
const files = ['about.html', 'blog-index.html', 'blog.html', 'contact.html', 'index.html', 'services.html', 'thank-you.html']; 
files.forEach(f => { 
    let p = 'c:\\know-ur-family-master\\' + f; 
    let c = fs.readFileSync(p, 'utf8'); 
    if(c.includes('<a href="contact.html" class="btn-primary-sm">Contact Us</a>') && !c.includes('<a href="data-sheet.html">')) { 
        fs.writeFileSync(p, c.replace('<a href="contact.html" class="btn-primary-sm">Contact Us</a>', '<a href="data-sheet.html">Data Sheet</a>\n            <a href="contact.html" class="btn-primary-sm">Contact Us</a>')); 
        console.log('Updated ' + f); 
    } 
});
