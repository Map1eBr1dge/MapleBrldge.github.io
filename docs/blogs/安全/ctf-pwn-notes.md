---
title: CTF Pwn 入门笔记
date: 2024-08-20
categories:
  - 安全
tags:
  - CTF
  - Pwn
  - 二进制
isShowComments: true
---

# CTF Pwn 入门笔记

## 什么是 Pwn

Pwn 是 CTF 竞赛中的一种题型，主要考察二进制漏洞利用能力。参赛者需要通过分析程序中的漏洞，获取 shell 或读取 flag。

## 常见漏洞类型

- **栈溢出 (Stack Overflow)**: 最基础的漏洞类型
- **格式化字符串 (Format String)**: 利用 printf 系列函数的漏洞
- **堆利用 (Heap Exploitation)**: 利用堆管理器的漏洞
- **UAF (Use After Free)**: 释放后重用

## 学习路线

```bash
# 推荐工具
pwntools    # Python exploit 框架
gdb+pwndbg  # 调试器
ROPgadget   # ROP 链生成
checksec    # 安全检查工具
```

## 推荐资源

- [CTF Wiki](https://ctf-wiki.org/)
- [pwnable.tw](https://pwnable.tw/)
- [BUUCTF](https://buuoj.cn/)
