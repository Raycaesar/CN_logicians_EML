const translations = {
    zh: {
        nav_about: "项目简介", nav_research: "研究计划", nav_team: "研究团队", nav_publications: "成果与资料", nav_forum: "讨论区 (GitHub)",
        hero_title: "中国学者在现代模态逻辑形成期的贡献", hero_subtitle: "沈有乾、沈有鼎、汤藻真与金岳霖的跨国学术网络与逻辑学探索",
        about_title: "关于本项目", about_content: "本项目致力于重新审视20世纪初中国逻辑学家在现代模态逻辑发展初期所做出的先驱性贡献。我们将探讨他们与 C.I. Lewis, Christine Ladd-Franklin, Oskar Becker 等人的学术互动，梳理语法学与语义学层面的重要修正与创新。",
        research_title: "四大研究版块",
        research_1: "聚焦1927年沈有乾对Ladd-Franklin系统的捍卫。结合Roy Cook的研究，探讨LF作为现代模态逻辑开创者的可能性，以及沈有乾早期对接近系统D的模态理念的接触。",
        research_2: "探究沈有鼎在哈佛时期对Oskar Becker关于公理4, B, 5的修正。深入论述其对模态逻辑S4和S5系统确立及语义学的核心贡献（本部分首发成果已被 AWPL 接收）。",
        research_3: "发掘1936-1937年间汤藻真为S2建立的拓扑/代数语义，这一工作早于McKinsey与Tarski的经典论文。结合荷兰学者Nick Bezhanishvili的成果，分析其对严格蕴含悖论的研究。",
        research_4: "重新审视金岳霖对富兰克林，沈有乾和刘易斯工作的引介和评价。作为中国早期分析哲学的核心人物，考察他在模态逻辑早期知识传播中的桥梁作用。",
        team_title: "研究团队", pub_title: "学术成果与文献资料", pub_desc: "公开发表的文章与开放获取的文献将在此更新。团队内部工作档案（如未授权档案扫描件）请访问我们的私有数据库（仅限邀请）。",
        link_button_1: "了解详细研究计划"
    },
    en: {
        nav_about: "About", nav_research: "Research Plan", nav_team: "Team", nav_publications: "Publications & Docs", nav_forum: "Forum (GitHub)",
        hero_title: "Chinese Scholars and the Early Stages of Modern Modal Logic", hero_subtitle: "The Transnational Academic Network of Eugene Shen, Shen Yuting, Tang Tsao-Chen, and Jin Yuelin",
        about_title: "About the Project", about_content: "This project re-examines the pioneering contributions of early 20th-century Chinese logicians to the development of modern modal logic. We explore their interactions with figures like C.I. Lewis, Christine Ladd-Franklin, and Oskar Becker.",
        research_title: "Four Research Themes",
        research_1: "Focusing on Eugene Shen's 1927 defense of the Ladd-Franklin system. Drawing on Roy Cook's work, we explore LF as a founder of modern modal logic and Shen's early exposure to modal concepts.",
        research_2: "Investigating Shen Yuting's correction of Oskar Becker regarding axioms 4, B, and 5 during his time at Harvard, and his core contributions to the formulation and semantics of S4 and S5 (initial findings accepted by AWPL).",
        research_3: "Uncovering Tang Tsao-Chen's topological/algebraic semantics for S2 built between 1936-1937, pre-dating McKinsey and Tarski. Incorporating findings from Dutch researcher Nick Bezhanishvili on the paradoxes of strict implication.",
        research_4: "Re-evaluating Jin Yuelin's introduction of CLF, Eugene Shen and C I Lewis's work , acting as a crucial bridge for the early transmission of modal logic in China.",
        team_title: "Research Team", pub_title: "Publications & Resources", pub_desc: "Published papers and open-access materials will be updated here. Internal working archives (e.g., unauthorized scans) are hosted in our private repository (invite only).",
         link_button_1: "Research plan in details"
    }
};

let currentLang = 'zh';

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
});