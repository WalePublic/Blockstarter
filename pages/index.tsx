import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {

    const getYear = ()=> {
        const year = new Date().getFullYear();
        return year;
    }

  return (
    <div className="container">
        <Head>
            <title>Blockchain Starter | Ideas come to life</title>
            <meta name="description" content="Blockchain starter: where ideas receive life" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="nav-toggle"/>
            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__nav-icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <div className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="/create" className="navigation__link">Create</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Terms</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
                </ul>
            </div>
        </div>
        <header className="header">
            <div className="header__logo-box">
                <img src="/favicon.ico" alt="logo" className="header__logo" />
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Blocks!</span>
                    <span className="heading-primary--sub">where ideas come to life</span>
                </h1>
                <a href="/Explore" className="btn btn--white btn--animated btn__reveal">Explore Campaigns</a>
            </div>
        </header>
        <main className="main-layout">
            <section className="section-intro">
                <div>
                    <h3 className="heading-secondary util-margin-bottom-big">The satisfaction of completion</h3>
                </div>
                <div className="intro-layout">
                    <div className="intro-layout__left">
                        <h3 className="heading-tertiary util-margin-bottom-small">The Joy of living ideas</h3>
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nemo atque temporibus, repellat, necessitatibus praesentium optio fugiat voluptatibus ducimus doloremque itaque incidunt rerum. Labore adipisci cumque culpa blanditiis. Facilis, similique!
                        </p>
                        <h3 className="heading-tertiary util-margin-bottom-small">The Ballydale Project</h3>
                        <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nemo atque temporibus, repellat, necessitatibus praesentium optio fugiat voluptatibus ducimus doloremque itaque incidunt rerum. Labore adipisci cumque culpa blanditiis. Facilis, similique!
                        </p>
                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="intro-layout__right">
                        <div className="composition">
                            <img src="/robot_thumb.jpg" alt="Photo 1" className="composition__photo composition__photo--1"></img>
                            <img src="/art_thumb.jpg" alt="Photo 2" className="composition__photo composition__photo--2"></img>
                            <img src="/graf_thumb.jpg" alt="Photo 3" className="composition__photo composition__photo--3"></img>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>Blockchain intro horizontal rule</div>
                </div>
            </section>
            <section className="section-categories">
                
                <div className="cat-layout">
                    <div className="cat-board">
                        <div className="long-card">
                            <svg className="long-card__icon">
                                <use xlinkHref="/sprites.svg#icon-lab"></use>
                            </svg>
                            <h3 className="heading-tertiary util-margin-bottom-small long-card__text-heading">Science</h3>
                            <p className="long-card__text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus aliquid quaerat quae possimus omnis placeat ducimus sunt cupiditate consectetur ex adipisci excepturi velit, quod officiis eveniet ad fuga cumque?</p>
                        </div>
                        <div className="long-card">
                            <svg className="long-card__icon">
                                <use xlinkHref="/sprites.svg#icon-images"></use>
                            </svg>
                            <h3 className="heading-tertiary util-margin-bottom-small long-card__text-heading">Art</h3>
                            <p className="long-card__text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus aliquid quaerat quae possimus omnis placeat ducimus sunt cupiditate consectetur ex adipisci excepturi velit, quod officiis eveniet ad fuga cumque?</p>
                        </div>
                        <div className="long-card">
                            <svg className="long-card__icon">
                                <use xlinkHref="/sprites.svg#icon-users"></use>
                            </svg>
                            <h3 className="heading-tertiary util-margin-bottom-small long-card__text-heading">Social</h3>
                            <p className="long-card__text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus aliquid quaerat quae possimus omnis placeat ducimus sunt cupiditate consectetur ex adipisci excepturi velit, quod officiis eveniet ad fuga cumque?</p>
                        </div>
                        <div className="long-card">
                            <svg className="long-card__icon">
                            <use xlinkHref="/sprites.svg#icon-wrench"></use>
                            </svg>
                            <h3 className="heading-tertiary util-margin-bottom-small long-card__text-heading">Tech</h3>
                            <p className="long-card__text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus aliquid quaerat quae possimus omnis placeat ducimus sunt cupiditate consectetur ex adipisci excepturi velit, quod officiis eveniet ad fuga cumque?</p>
                        </div>
                        
                        {/*<div className="long-card"> 
                            <div className="long-card__text"> Expeditions</div>
                        </div>*/}
                    </div>
                </div>
            </section>
            <section className="section-popular">
                <div>
                    <h3 className="heading-secondary util-margin-bottom-big">Popular Campaigns</h3>
                </div>
                <div className="popular-layout">
                    <div className="d-card">
                        <div className="d-card__side d-card__side--front">
                            <div className="d-card__picture d-card__picture--1">
                                &nbsp;7
                            </div>
                            <h4 className="d-card__heading">
                                <span className="d-card__heading-span d-card__heading-span--1 ">The Rupert Project</span>
                            </h4>
                            <div className="d-card__details">
                                <ul>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-man"></use>
                                            </svg>    
                                        </span>
                                        <span>Author: Ola Sol</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>67 supporters</span>
                                    </li>

                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>16 requests by author</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>135 days to deadline</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-card__side d-card__side--back d-card__side--back-1">
                            <div className="d-card__cta">
                                <div className="d-card__description">
                                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quo vitae quas consectetur officia possimus sapiente nulla, dolore similique! Nam natus exercitationem repellat voluptate vero dolor repellendus laborum earum quam.</h3>
                                </div>
                                <div className="d-card__contribution-box">
                                    <div className="d-card__contribution-only">Only</div>
                                    <div className="d-card__contribution-value">0.007 Ether</div>
                                    <a href="#popup" className="btn btn--white">Support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-card">
                        <div className="d-card__side d-card__side--front">
                            <div className="d-card__picture d-card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="d-card__heading">
                                <span className="d-card__heading-span d-card__heading-span--2">The Rupert Project</span>
                            </h4>
                            <div className="d-card__details">
                                <ul>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-man"></use>
                                            </svg>    
                                        </span>
                                        <span>Author: Ola Sol</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>67 supporters</span>
                                    </li>

                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>16 requests by author</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>135 days to deadline</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-card__side d-card__side--back d-card__side--back-2">
                            <div className="d-card__cta">
                                <div className="d-card__description">
                                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quo vitae quas consectetur officia possimus sapiente nulla, dolore similique! Nam natus exercitationem repellat voluptate vero dolor repellendus laborum earum quam.</h3>
                                </div>
                                <div className="d-card__contribution-box">
                                    <div className="d-card__contribution-only">Only</div>
                                    <div className="d-card__contribution-value">0.007 Ether</div>
                                    <a href="#popup" className="btn btn--white">Support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-card">
                        <div className="d-card__side d-card__side--front">
                            <div className="d-card__picture d-card__picture--3">
                                &nbsp;
                            </div>
                            <h4 className="d-card__heading">
                                <span className="d-card__heading-span d-card__heading-span--3">The Rupert Project</span>
                            </h4>
                            <div className="d-card__details">
                                <ul>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-man"></use>
                                            </svg>    
                                        </span>
                                        <span>Author: Ola Sol</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>67 supporters</span>
                                    </li>

                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>16 requests by author</span>
                                    </li>
                                    <li>
                                        <span>
                                            <svg className="d-card__icon">
                                                <use xlinkHref="/sprites.svg#icon-users"></use>
                                            </svg>
                                        </span>
                                        <span>135 days to deadline</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-card__side d-card__side--back d-card__side--back-3">
                            <div className="d-card__cta">
                                <div className="d-card__description">
                                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quo vitae quas consectetur officia possimus sapiente nulla, dolore similique! Nam natus exercitationem repellat voluptate vero dolor repellendus laborum earum quam.</h3>
                                </div>
                                <div className="d-card__contribution-box">
                                    <div className="d-card__contribution-only">Only</div>
                                    <div className="d-card__contribution-value">0.007 Ether</div>
                                    <a href="#popup" className="btn btn--white">Support</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-testimonial">
                <div>
                    <h3 className="heading-secondary util-margin-bottom-small">Being Part Of the Jounrney</h3>
                </div>
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="/Video/video.mp4" type="video/mp4"></source>
                        <source src="/Video/video.webm" type="video/webm"></source>
                        Your browser is not supported!
                    </video>
                </div>
                <div className="testimonials-layout">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="/nat-8.jpg" alt="circlar image" className="story__img" />
                            <figcaption className="story__caption">
                                Victoria Emmet
                            </figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary util-margin-bottom-small">So rewarding to be part of this adventure</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum incidunt corrupti qui corporis nam, culpa, rem repudiandae dolor nostrum perspiciatis quae aliquid et aliquam ex quibusdam in totam optio!
                            </p>
                        </div>
                    </div>

                    <div className="story">
                        <figure className="story__shape">
                            <img src="/nat-9.jpg" alt="circlar image" className="story__img" />
                            <figcaption className="story__caption">
                                 Davi Nates
                            </figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary util-margin-bottom-small">Amazing project!</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum incidunt corrupti qui corporis nam, culpa, rem repudiandae dolor nostrum perspiciatis quae aliquid et aliquam ex quibusdam in totam optio!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-cta">
                <div className="cta">
                    <div className="register">
                        <div className="register__form">
                            <form action="#" className="form">
                                <div className="util-margin-bottom-medium">
                                    <h2 className="heading-secondary">So Many Possibilities</h2>
                                </div>
                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Full Name" id="name" required></input>
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>
                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email" id="email" required></input>
                                    <label htmlFor="email" className="form__label">Email</label>
                                </div>
                                <div className="form__group">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small_group" name="size"></input>
                                        <label htmlFor="small_group" className="form__radio-label">
                                            <span className="form__radio-button"></span>Individual
                                        </label>
                                    </div>
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large_group" name="size"></input>
                                        <label htmlFor="large_group" className="form__radio-label">
                                            <span className="form__radio-button"></span>Company
                                        </label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <button className="btn btn--primary util-margin-top-big">Join!&rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>
        <footer className="footer">
            <div className="footer-nav__logo-box">
                <img src="/favicon.ico" alt="Full logo" className="footer-nav__logo" />
            </div>
            <div className="footer-nav__nav">
                <ul className="footer-nav__list">
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Company</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Contact Us</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Careers</a></li>
                    <li className="footer-nav__item"><a href="#" className="footer-nav__link">Terms</a></li>
                </ul>
            </div>
            <div>
                <span>Copyright ©{getYear()}</span>
            </div>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>

    </div>
  )
}

export default Home
