const modal = document.getElementById('detail-modal');
const modalTitle = document.getElementById('modal-title');
const modalKicker = document.getElementById('modal-kicker');
const modalContent = document.getElementById('modal-content');
document.getElementById('year').textContent = new Date().getFullYear();

const details = {
  about: {kicker:'PROFILE / 02', title:'ABOUT SUFIYAN', html:`<p>I am pursuing an MBA with dual specialisation in Finance and Business Analytics at D. Y. Patil Vidyapeeth – Global Business School &amp; Research Centre, Pune. My academic foundation is in Commerce, with a strong interest in financial analysis, accounting, modelling and using data to support business decisions.</p><p>This portfolio brings together selected academic projects, practical experience and tools I have worked with.</p>`},
  education: {kicker:'ACADEMIC JOURNEY / 03', title:'EDUCATION', html:`<ul><li><b>MBA — Finance &amp; Business Analytics</b><br>D. Y. Patil Vidyapeeth – Global Business School &amp; Research Centre, Pune</li><li><b>Bachelor of Commerce</b><br>University of Mumbai</li></ul><p>Dates and academic scores can be added after final verification.</p>`},
  skills: {kicker:'TOOLKIT / 04', title:'SKILLS & TOOLS', html:`<div class="project-meta"><span>Microsoft Excel</span><span>Power BI</span><span>Python</span><span>SQL</span><span>Tally</span><span>Zoho Books</span><span>Financial Analysis</span><span>Financial Modelling</span><span>Forecasting</span><span>Accounting</span></div><p>We will show proficiency levels only where they can be demonstrated through real work.</p>`},
  approach: {kicker:'WORKING PRINCIPLE / 05', title:'TURNING DATA INTO DECISIONS', html:`<p>My approach is to understand the business question first, examine the underlying data, check assumptions, and communicate the result in a clear and practical way.</p>`},
  internship: {kicker:'EXPERIENCE / 07', title:'LONAR TECHNOLOGIES', html:`<p><b>Accounting Intern · 3 months</b></p><ul><li>Worked with accounting entries and records using Tally.</li><li>Assisted with invoice creation and invoice reconciliation.</li><li>Worked with GSTR-2B-related reconciliation.</li><li>Gained exposure to Zoho Books and day-to-day accounting processes.</li></ul><p>We can add exact dates and supporting documents when you provide/confirm them.</p>`},
  contact: {kicker:'CONTACT / 08', title:'LET’S CONNECT', html:`<p>Interested in opportunities across finance, accounting, financial analysis and business analytics.</p><div class="contact-grid"><a href="tel:+919987130743"><span>PHONE</span><b>+91 99871 30743</b></a><a href="mailto:fahadsiddique0977@gmail.com"><span>EMAIL</span><b>fahadsiddique0977@gmail.com</b></a><a href="https://www.linkedin.com/in/sufiyan-siddique-ba6126274" target="_blank" rel="noopener"><span>LINKEDIN</span><b>View LinkedIn Profile ↗</b></a></div><p class="location-line">Location: Mumbai, India</p>`}
};
function openDetails(data){modalKicker.textContent=data.kicker;modalTitle.textContent=data.title;modalContent.innerHTML=data.html;modal.showModal();}
document.querySelectorAll('[data-modal]').forEach(button=>button.addEventListener('click',()=>openDetails(details[button.dataset.modal])));
const projects = {
  lt:{kicker:'PROJECT / FINANCIAL MODELLING',title:'LARSEN & TOUBRO LIMITED',html:`<p><b>Financial Modelling: Historical Analysis, Forecasting and Valuation</b></p><p>A company-focused financial modelling project covering historical financial performance, forecast assumptions and valuation methods.</p><div class="project-meta"><span>10-year historical analysis</span><span>5-year forecast</span><span>DCF valuation</span><span>Relative valuation</span><span>Ratio analysis</span></div><h3>What this project can show</h3><ul><li>Historical financial statements and key ratios.</li><li>Revenue, cost and profitability forecasting.</li><li>Discounted Cash Flow (DCF) and P/E-based valuation.</li><li>Key assumptions, limitations and valuation comparison.</li></ul><div class="project-actions"><a class="project-action" href="https://rotary-tuesday-catering-early.trycloudflare.com" target="_blank" rel="noopener">WATCH LIVE DASHBOARD ↗</a><a class="project-action secondary" href="excel-preview.html?v=3" target="_blank" rel="noopener">VIEW EXCEL MODEL ↗</a><a class="project-action secondary" href="Larsen-Toubro-financial-model.xlsx" download>DOWNLOAD EXCEL MODEL ↓</a></div>`},
  blinkit:{kicker:'PROJECT / POWER BI DASHBOARD',title:'BLINKIT SALES & PERFORMANCE DASHBOARD',html:`<p><b>Power BI Business Intelligence Dashboard</b></p><p>An interactive Power BI project analysing sales, outlets, products and business performance for Blinkit.</p><div class="project-meta"><span>Sales analysis</span><span>Outlet performance</span><span>Item categories</span><span>Interactive dashboards</span><span>DAX measures</span></div><h3>Project highlights</h3><ul><li>Executive sales and performance overview.</li><li>Product category and outlet-level analysis.</li><li>Interactive Power BI visualisations and filters.</li><li>Business insights and performance tracking.</li></ul><div class="project-actions"><a class="project-action" href="blinkit-dashboard-overview.png?v=3" target="_blank" rel="noopener">WATCH DASHBOARD OVERVIEW ↗</a><a class="project-action secondary" href="Blinkit-PowerBI-project.pbix" download>DOWNLOAD POWER BI FILE ↓</a></div>`}
};
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>openDetails(projects[button.dataset.project])));
document.querySelector('.modal-close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',event=>{if(event.target===modal)modal.close();});

const themePicker=document.querySelector('.theme-picker');
const themeToggle=document.querySelector('.theme-toggle');
const themeOptions=document.querySelector('.theme-options');
function applyTheme(theme){
  document.body.classList.remove('theme-comic','theme-premium','theme-paper','theme-manga');
  document.body.classList.add('theme-'+theme);
  localStorage.setItem('portfolio-theme',theme);
}
themeToggle.addEventListener('click',()=>{
  const open=themeOptions.classList.toggle('open');
  themeToggle.setAttribute('aria-expanded',String(open));
});
document.querySelectorAll('[data-theme]').forEach(button=>button.addEventListener('click',()=>{
  applyTheme(button.dataset.theme);
  themeOptions.classList.remove('open');
  themeToggle.setAttribute('aria-expanded','false');
}));
applyTheme(localStorage.getItem('portfolio-theme') || 'comic');

const intro=document.querySelector('.portfolio-intro');
document.querySelectorAll('.panel').forEach((panel,index)=>{
  panel.style.animationDelay=(0.55+index*0.07)+'s';
});
const hideIntro=()=>{
  if(!intro) return;
  intro.classList.add('intro-hidden');
  setTimeout(()=>intro.remove(),800);
};
setTimeout(hideIntro,2600);
window.addEventListener('load',()=>setTimeout(hideIntro,1800));
