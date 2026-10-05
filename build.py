#!/usr/bin/env python3
"""Собирает index.html из index.src.html: стили вставляются прямо в страницу,
чтобы сайт выглядел правильно, даже если отдельные файлы грузятся плохо.
Запуск: python3 build.py"""
import re

src = open('index.src.html', encoding='utf-8').read()
css = open('style.css', encoding='utf-8').read()
fonts = open('fonts.css', encoding='utf-8').read()

# шрифты: только кириллица/латиница уже отобраны; пути к файлам остаются относительными
def minify(t):
    t = re.sub(r'/\*.*?\*/', '', t, flags=re.S)
    t = re.sub(r'\s+', ' ', t)
    t = re.sub(r'\s*([{};,>])\s*', r'\1', t)
    return t.strip()

out = src
out = re.sub(r'<link rel="stylesheet" href="fonts\.css[^"]*">', '<style>' + minify(fonts) + '</style>', out)
out = re.sub(r'<link rel="stylesheet" href="style\.css[^"]*">', '<style>' + minify(css) + '</style>', out)
open('index.html', 'w', encoding='utf-8').write(out)
print('index.html собран:', len(out) // 1024, 'КБ')
