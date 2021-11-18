import { ReactElement } from "react";
import Image from 'next/image';
import testCamps from "../../testCamp";

function ExploreCard(props:any):ReactElement {
return (
        <div className="explore-card">
            <div className="explore-card__picture">
                <Image src={props.img} alt="Vercel Logo" layout='fill' />
            </div>
            <div className="explore-card__heading heading-tertiary">
                <h2>{props.name}</h2>
            </div>
            <div className="explore-card__details">
                <ul>
                    <li>
                        <span>
                            <svg className="d-card__icon">
                                <use xlinkHref="/sprites.svg#icon-man"></use>
                            </svg>    
                        </span>
                        <span>{props.author}</span>
                    </li>
                    <li>
                        <span>
                            <svg className="d-card__icon">
                                <use xlinkHref="/sprites.svg#icon-users"></use>
                            </svg>
                        </span>
                        <span>{props.numofsupporters}</span>
                    </li>

                    <li>
                        <span>
                            <svg className="d-card__icon">
                                <use xlinkHref="/sprites.svg#icon-users"></use>
                            </svg>
                        </span>
                        <span>{props.numofrequests}</span>
                    </li>
                    <li>
                        <span>
                            <svg className="d-card__icon">
                                <use xlinkHref="/sprites.svg#icon-users"></use>
                            </svg>
                        </span>
                        <span>{props.daystodeadline}</span>
                    </li>
                </ul>
            </div>
            <div className="explore-card__description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default ExploreCard;