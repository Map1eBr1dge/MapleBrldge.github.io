<template><div><h1 id="ctf-pwn-入门笔记" tabindex="-1"><a class="header-anchor" href="#ctf-pwn-入门笔记"><span>CTF Pwn 入门笔记</span></a></h1>
<h2 id="什么是-pwn" tabindex="-1"><a class="header-anchor" href="#什么是-pwn"><span>什么是 Pwn</span></a></h2>
<p>Pwn 是 CTF 竞赛中的一种题型，主要考察二进制漏洞利用能力。参赛者需要通过分析程序中的漏洞，获取 shell 或读取 flag。</p>
<h2 id="常见漏洞类型" tabindex="-1"><a class="header-anchor" href="#常见漏洞类型"><span>常见漏洞类型</span></a></h2>
<ul>
<li><strong>栈溢出 (Stack Overflow)</strong>: 最基础的漏洞类型</li>
<li><strong>格式化字符串 (Format String)</strong>: 利用 printf 系列函数的漏洞</li>
<li><strong>堆利用 (Heap Exploitation)</strong>: 利用堆管理器的漏洞</li>
<li><strong>UAF (Use After Free)</strong>: 释放后重用</li>
</ul>
<h2 id="学习路线" tabindex="-1"><a class="header-anchor" href="#学习路线"><span>学习路线</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 推荐工具</span></span>
<span class="line">pwntools    <span class="token comment"># Python exploit 框架</span></span>
<span class="line">gdb+pwndbg  <span class="token comment"># 调试器</span></span>
<span class="line">ROPgadget   <span class="token comment"># ROP 链生成</span></span>
<span class="line">checksec    <span class="token comment"># 安全检查工具</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐资源" tabindex="-1"><a class="header-anchor" href="#推荐资源"><span>推荐资源</span></a></h2>
<ul>
<li><a href="https://ctf-wiki.org/" target="_blank" rel="noopener noreferrer">CTF Wiki<ExternalLinkIcon/></a></li>
<li><a href="https://pwnable.tw/" target="_blank" rel="noopener noreferrer">pwnable.tw<ExternalLinkIcon/></a></li>
<li><a href="https://buuoj.cn/" target="_blank" rel="noopener noreferrer">BUUCTF<ExternalLinkIcon/></a></li>
</ul>
</div></template>


