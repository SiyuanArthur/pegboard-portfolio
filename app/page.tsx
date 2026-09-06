'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowDown, CodeXml as Github, Mail, FileText, Printer, MoveUpRight, Fingerprint, Plus, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { profile, projects } from './portfolio';

type Panel = 'about' | 'works' | 'resume' | 'skills' | 'contact' | null;

export default function Home() {
  const [panel, setPanel] = useState<Panel>(null);
  const [project, setProject] = useState<string | null>(null);
  const current = projects.find(p => p.id === project);
  const titles = { about: '关于我', works: '精选作品', resume: '我的简历', skills: '技能工具箱', contact: '保持联系' };
  const open = (value: Panel) => { setProject(null); setPanel(value); };
  return (
    <main className="studio">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="返回工作台"><span className="brand-mark">＋</span> PERSONAL ARCHIVE<span className="edition">个人档案 / 2026</span></a>
        <button className="top-contact" onClick={() => open('contact')}>打个招呼 <ArrowUpRight size={16}/></button>
      </header>
      <div className="board-heading"><span><i/> 一张关于我的工作台</span><span>一点经历，一些作品，和持续生长的想法。</span></div>
      <div className="workstation">
        <aside className="directory">
          <div><p className="eyebrow">WELCOME TO MY CORNER</p><h1>生活有序，<br/>想法自由。</h1><p className="intro">{profile.intro}</p></div>
          <div className="directory-list"><p className="eyebrow">BOARD INDEX / 工作台索引</p>
            {([['about','01','个人简介'],['works','02','精选作品'],['resume','03','经历与教育'],['skills','04','技能工具箱'],['contact','05','联系方式']] as const).map(([key,no,label]) => <button key={key} onClick={()=>open(key)}><span>{no}</span>{label}<MoveUpRight size={14}/></button>)}
          </div>
          <div className="directory-bottom"><span className="tiny-cross">✳</span><h2>A LITTLE<br/>MORE HUMAN.</h2><p>点击物件，认识我多一点。<br/>这里的故事，还在继续。</p><span className="sample-label">当前为个人资料示例版</span></div>
        </aside>
        <section className="pegboard" aria-label="互动作品集洞洞板">
          <span className="screw tl" aria-hidden="true"/><span className="screw tr" aria-hidden="true"/><span className="screw bl" aria-hidden="true"/><span className="screw br" aria-hidden="true"/>
          <button className="about-tag hanging" onClick={()=>open('about')} aria-label="01 个人简介，点击展开">
            <img src="/assets/mustard-key-tag.png" alt="" className="tag-image"/>
            <span className="tag-copy"><span className="item-no">01 / HELLO</span><strong>ABOUT<br/>ME.</strong><span>个人简介</span><ArrowDown size={20}/><small>OPEN TO DISCOVER</small></span>
          </button>
          <button className="works-card hanging" onClick={()=>open('works')}>
            <span className="clip" aria-hidden="true"/>
            <span className="works-inner"><span className="paper-top"><span className="item-no">02 / PORTFOLIO</span><ArrowUpRight size={21}/></span><strong className="works-title">SELECTED<br/>WORKS<span className="serif-star">✳</span></strong><span className="works-sub">一些值得分享的作品</span>
              <span className="project-previews">{projects.map(p=><span key={p.id} className={`preview-row ${p.color}`}><span className="project-number">{p.id}</span><span><b>{p.name}</b><small>{p.en}</small></span><ArrowUpRight size={18}/></span>)}</span>
              <span className="paper-footer"><span>收录 03 个项目位置</span><span>打开文件夹 ↗</span></span>
            </span>
          </button>
          <button className="id-card hanging" onClick={()=>open('resume')}><span className="clip small" aria-hidden="true"/><span className="id-top"><span>03 / IDENTITY</span><FileText size={17}/></span><span className="id-body"><span className="avatar"><Fingerprint size={48} strokeWidth={1}/></span><span><strong>{profile.name}</strong><small>{profile.englishName}</small><span>{profile.role}</span></span></span><span className="id-bottom">经历与教育 <span>查看简历 ↗</span></span></button>
          <button className="skills-card hanging" onClick={()=>open('skills')}><span className="eyelet" aria-hidden="true"/><span className="item-no">04 / MY TOOLKIT</span><strong>小小工具箱</strong><span className="skill-pills"><span>思考</span><span>创造</span><span>表达</span><span>协作</span></span><span className="skill-footer">一直学习，一直更新 <Plus size={15}/></span></button>
          <button className="contact-card hanging" onClick={()=>open('contact')}><span className="clip small" aria-hidden="true"/><span className="contact-inner"><span className="contact-top"><span className="item-no">05 / SAY HELLO</span><Mail size={23} strokeWidth={1.2}/></span><strong>LET’S<br/>CONNECT.</strong><span>从一句你好开始。</span><span className="contact-line">联系方式 <ArrowUpRight size={20}/></span></span></button>
          <div className="board-note"><span>KEEP MAKING<br/>KEEP GROWING</span><span className="note-symbol">↗</span></div>
          <div className="board-bottom"><span>PERSONAL COLLECTION</span><span>不必完美，保持生长。</span><span>VOL. 01</span></div>
        </section>
      </div>
      <footer className="footer"><span>© 2026 {profile.englishName} · 个人作品集</span><span>一份简历，也是一点自己的样子。</span><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ArrowUpRight size={13}/></a></footer>
      <Dialog open={panel !== null} onOpenChange={v=>{if(!v){setPanel(null);setProject(null);}}}>
        <DialogContent className="detail-dialog" showCloseButton={false}>
          <DialogClose className="close-dialog" aria-label="关闭"><X size={20}/></DialogClose>
          <div className="detail-kicker">PERSONAL ARCHIVE / {panel?.toUpperCase()}</div>
          <DialogTitle className="detail-title">{current ? current.name : panel ? titles[panel] : ''}</DialogTitle>
          <DialogDescription className="detail-description">{current ? current.description : '个人资料示例 · 正式使用前请替换为你的真实内容'}</DialogDescription>
          {panel === 'about' && <div className="detail-body"><div className="profile-header"><div className="profile-avatar"><Fingerprint size={66} strokeWidth={1}/></div><div><h2>{profile.name}</h2><p>{profile.role} · {profile.location}</p></div></div><p>{profile.bio}</p><div className="detail-block"><h3>我关注的事情</h3><p>介绍你最关心的领域、解决问题的方式，以及工作之外让你保持好奇的事物。</p></div><button className="action-button" onClick={()=>open('resume')}>继续了解我的经历 <ArrowUpRight size={17}/></button></div>}
          {panel === 'works' && <div className="detail-body">{current ? <><button className="back-link" onClick={()=>setProject(null)}>← 返回全部作品</button><span className={`project-banner ${current.color}`}>{current.en}<span>{current.id}</span></span>{current.sections.map(([title,text])=><div className="detail-block" key={title}><h3>{title}</h3><p>{text}</p></div>)}</> : <div className="projects-list">{projects.map(p=><button className="project-item" key={p.id} onClick={()=>setProject(p.id)}><span className={`project-tile ${p.color}`}>{p.id}</span><span><small>{p.type} · 示例</small><strong>{p.name}</strong><p>{p.summary}</p></span><ArrowUpRight size={22}/></button>)}</div>}</div>}
          {panel === 'resume' && <div className="detail-body resume-body"><div className="resume-heading"><div><h2>{profile.name}</h2><p>{profile.role} · {profile.location}</p></div><button className="action-button print-button" onClick={()=>window.print()}><Printer size={16}/> 打印 / 保存 PDF</button></div><p>{profile.bio}</p><h3 className="section-heading">经历与教育</h3><div className="timeline">{profile.experience.map((e,i)=><div className="timeline-item" key={i}><small>{e.period}</small><h3>{e.title}</h3><b>{e.place}</b><p>{e.text}</p></div>)}</div><h3 className="section-heading">专业技能</h3><div className="modal-pills">{profile.skills.map(s=><span key={s}>{s}</span>)}</div><p className="print-contact">GitHub: {profile.github}{profile.email ? ` · 邮箱：${profile.email}` : ''}</p></div>}
          {panel === 'skills' && <div className="detail-body"><p>把你真正使用过的能力与工具放在这里，让作品为熟练度作证。</p><div className="tool-grid">{profile.skills.map((s,i)=><div key={s}><span>0{i+1}</span><h3>{s}</h3><p>填写具体技能、常用工具和对应的项目经验。</p></div>)}</div></div>}
          {panel === 'contact' && <div className="detail-body"><p>欢迎交流作品、工作机会，或一个有趣的想法。</p><a className="contact-option" href={profile.github} target="_blank" rel="noreferrer"><Github size={25}/><span><small>GITHUB</small><strong>SiyuanArthur</strong></span><ArrowUpRight size={22}/></a>{profile.email ? <a className="contact-option" href={`mailto:${profile.email}`}><Mail size={25}/><span><small>EMAIL</small><strong>{profile.email}</strong></span><ArrowUpRight size={22}/></a> : <div className="contact-option email-placeholder"><Mail size={25}/><span><small>EMAIL</small><strong>联系邮箱待补充</strong></span></div>}<p className="contact-signoff">THANKS FOR STOPPING BY. <span>✳</span></p></div>}
        </DialogContent>
      </Dialog>
    </main>
  );
}
