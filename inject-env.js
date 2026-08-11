const fs = require('fs');
const path = require('path');

// 构建目标路径：doc/login.html
const filePath = path.join(__dirname, 'doc', 'login.html');
let html = fs.readFileSync(filePath, 'utf8');

const url = process.env.SUPABASE_URL || '__SUPABASE_URL__';
const anonKey = process.env.SUPABASE_ANON_KEY || '__SUPABASE_ANON_KEY__';

html = html.replace(/__SUPABASE_URL__/g, url);
html = html.replace(/__SUPABASE_ANON_KEY__/g, anonKey);

fs.writeFileSync(filePath, html);
console.log('✅ 环境变量已注入 doc/login.html');