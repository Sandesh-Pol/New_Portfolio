export const Portfolio =() =>{
    return(
        <>
         <article className="portfolio " data-page="portfolio">
                <header>
                    <h2 className="h2 article-title">Portfolio</h2>
                </header>

                <section className="projects">
                    <ul className="filter-list">
                        <li className="filter-item"><button className="active" data-filter-btn>All</button></li>
                        <li className="filter-item"><button data-filter-btn>Web Design</button></li>
                        <li className="filter-item"><button data-filter-btn>Applications</button></li>
                        <li className="filter-item"><button data-filter-btn>Web Development</button></li>
                    </ul>

                    <div className="filter-select-box">
                        <button className="filter-select " data-select>
                            <div className="select-value" data-select-value>Select Category</div>

                            <div className="select-icon">
                                <ion-icon name="chevron-down"></ion-icon>
                            </div>
                        </button>

                        <ul className="select-list">
                            <li className="select-item"><button data-select-item>All</button></li>
                            <li className="select-item"><button data-select-item>Web Design</button></li>
                            <li className="select-item"><button data-select-item>Applications</button></li>
                            <li className="select-item"><button data-select-item>Web Development</button></li>
                        </ul>
                    </div>

                    <ul className="project-list">
                        <li className="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/qRHpHMyd/project-1.jpg" alt="finance" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Finance</h3>
                                <p className="project-category">Web Development</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/bNrcM2Wt/project-2.png" alt="orizon" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Orizon</h3>
                                <p className="project-category">Web Development</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="web design">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/jSJVqYsq/project-3.jpg" alt="fundo" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Fundo</h3>
                                <p className="project-category">Web Design</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="applications">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/dtpXxNGb/project-4.png" alt="brawlhalla" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Brawlhalla</h3>
                                <p className="project-category">Applications</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="web design">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/43T0JKLw/project-5.png" alt="dsm." loading="lazy"/>
                                </figure>

                                <h3 className="project-title">DSM.</h3>
                                <p className="project-category">Web Design</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="web design">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/qR1DX1kZ/project-6.png" alt="metaspark" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Metaspark</h3>
                                <p className="project-category">Web Design</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/Kj4q9tjc/project-7.png" alt="summary" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Summary</h3>
                                <p className="project-category">Web Development</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="applications">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/rw2j4B1w/project-8.jpg" alt="task manager" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Task Manager</h3>
                                <p className="project-category">Applications</p>
                            </a>
                        </li>

                        <li className="project-item active" data-filter-item data-category="web development">
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <ion-icon name="eye-outline"></ion-icon>
                                    </div>

                                    <img src="https://i.postimg.cc/7LxNsSQv/project-9.png" alt="arrival" loading="lazy"/>
                                </figure>

                                <h3 className="project-title">Arrival</h3>
                                <p className="project-category">Web Development</p>
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </>
    )
}