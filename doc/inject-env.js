// inject-env.js
const fs = require('fs');
const path = require('path');

// 读取 login.html
const filePath = path.join(__dirname, 'login.html');
let html = fs.readFileSync(filePath, 'utf8');

// 从环境变量中读取值，若未设置则保留占位符（防止构建报错）
const url = process.env.SUPABASE_URL || '__SUPABASE_URL__';
const anonKey = process.env.SUPABASE_ANON_KEY || '__SUPABASE_ANON_KEY__';

// 替换占位符
html = html.replace(/__SUPABASE_URL__/g, url);
html = html.replace(/__SUPABASE_ANON_KEY__/g, anonKey);

// 写回文件
fs.writeFileSync(filePath, html);

console.log('✅ 环境变量已注入 login.html');