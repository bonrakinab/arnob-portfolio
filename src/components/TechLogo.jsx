const BASE='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
export const BRAND={
  python:`${BASE}/python/python-original.svg`,r:`${BASE}/r/r-original.svg`,matlab:`${BASE}/matlab/matlab-original.svg`,c:`${BASE}/c/c-original.svg`,javascript:`${BASE}/javascript/javascript-original.svg`,typescript:`${BASE}/typescript/typescript-original.svg`,html5:`${BASE}/html5/html5-original.svg`,react:`${BASE}/react/react-original.svg`,nextjs:`${BASE}/nextjs/nextjs-original.svg`,angularjs:`${BASE}/angularjs/angularjs-original.svg`,tailwindcss:`${BASE}/tailwindcss/tailwindcss-original.svg`,vitejs:`${BASE}/vitejs/vitejs-original.svg`,nodejs:`${BASE}/nodejs/nodejs-original.svg`,flask:`${BASE}/flask/flask-original.svg`,postgresql:`${BASE}/postgresql/postgresql-original.svg`,supabase:`${BASE}/supabase/supabase-original.svg`,prisma:`${BASE}/prisma/prisma-original.svg`,pytorch:`${BASE}/pytorch/pytorch-original.svg`,tensorflow:`${BASE}/tensorflow/tensorflow-original.svg`,scikitlearn:`${BASE}/scikitlearn/scikitlearn-original.svg`,amazonwebservices:`${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,oracle:`${BASE}/oracle/oracle-original.svg`,vercel:`${BASE}/vercel/vercel-original.svg`,git:`${BASE}/git/git-original.svg`,github:`${BASE}/github/github-original.svg`,docker:`${BASE}/docker/docker-original.svg`,linux:`${BASE}/linux/linux-original.svg`,jira:`${BASE}/jira/jira-original.svg`
};

const NAME_TO_BRAND={'Python':'python','R':'r','MATLAB':'matlab','C':'c','JavaScript':'javascript','TypeScript':'typescript','HTML/CSS':'html5','React':'react','Next.js':'nextjs','Angular':'angularjs','Tailwind CSS':'tailwindcss','Vite':'vitejs','Node.js':'nodejs','Flask':'flask','PostgreSQL':'postgresql','Supabase':'supabase','Prisma':'prisma','PyTorch':'pytorch','TensorFlow':'tensorflow','scikit-learn':'scikitlearn','AWS':'amazonwebservices','OCI':'oracle','Oracle Fusion ERP':'oracle','BI Publisher':'oracle','Vercel':'vercel','Git':'git','GitHub Actions':'github','Docker':'docker','Linux':'linux','JIRA':'jira'};
export const isBrand=name=>Boolean(BRAND[NAME_TO_BRAND[name]||name]);

function ConceptIcon({kind='ai'}){
  if(kind==='graph') return <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="16" cy="18" r="6"/><circle cx="48" cy="16" r="6"/><circle cx="32" cy="47" r="6"/><path d="M21 20l22-2M20 23l9 19M44 21L35 42"/></svg>;
  if(kind==='vision') return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M7 32s9-14 25-14 25 14 25 14-9 14-25 14S7 32 7 32Z"/><circle cx="32" cy="32" r="7"/></svg>;
  if(kind==='nlp') return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 14h44v30H31L18 54V44h-8Z"/><path d="M19 24h26M19 32h18"/></svg>;
  if(kind==='api') return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M25 14h14v9h9v18h-9v9H25v-9h-9V23h9Z"/><path d="M26 32h12M32 26v12"/></svg>;
  if(kind==='document') return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M16 8h23l10 10v38H16Z"/><path d="M39 8v12h11M23 31h19M23 39h19M23 47h12"/></svg>;
  if(kind==='education') return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M7 25 32 12l25 13-25 13Z"/><path d="M17 32v12c8 8 22 8 30 0V32M55 27v18"/></svg>;
  if(kind==='ml') return <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="12" width="40" height="40" rx="8"/><path d="M23 39V26l9 9 9-9v13"/></svg>;
  return <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6"/><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="4"/></svg>;
}

export default function TechLogo({name,logo,concept,size='md',className=''}){
  const key=logo||NAME_TO_BRAND[name];
  const src=BRAND[key];
  if(src) return <img className={`tech-logo ${size} ${className}`} src={src} alt="" loading="lazy" />;
  return <span className={`concept-logo ${size} ${className}`}><ConceptIcon kind={concept||'ai'}/></span>;
}