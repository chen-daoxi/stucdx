// build.js —— 在 Vercel 构建时替换占位符
const fs = require('fs');
const path = require('path');

// 读取 index.html
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

// 从环境变量读取真实值（Vercel 会自动注入）
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

// 替换占位符（全局替换，支持多个出现）
html = html.replace(/__SUPABASE_URL__/g, supabaseUrl);
html = html.replace(/__SUPABASE_ANON_KEY__/g, supabaseAnonKey);

// 写回文件
fs.writeFileSync(htmlPath, html, 'utf-8');

console.log('✅ 环境变量已注入 index.html');
console.log(`SUPABASE_URL: ${supabaseUrl ? '已设置' : '未设置（请检查环境变量）'}`);
console.log(`SUPABASE_ANON_KEY: ${supabaseAnonKey ? '已设置' : '未设置（请检查环境变量）'}`);