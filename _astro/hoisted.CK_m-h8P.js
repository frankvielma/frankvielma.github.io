import"./hoisted.2kyTQEl5.js";async function r(t){t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/&/g,"&amp;");const s=await fetch("/search-index.json");if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return(await s.json()).filter(e=>e.title.includes(t)||e.content.includes(t))}document.getElementById("search-input").addEventListener("input",async t=>{const s=t.target.value,a=s?await r(s):[],n=document.getElementById("search-results");n.innerHTML=a.map(e=>`
            <li class="dark:hover:bg-black hover:rounded-xl hover:bg-slate-300 flex gap-2 align-items p-2">
              <img src="${e.image}" class="h-20" alt="${e.title}" />
              <a href="/posts/${e.slug}" class="font-bold">${e.title}
              <span class="font-normal">${e.description}<span>
              </a>
            </li>`).join("")});
