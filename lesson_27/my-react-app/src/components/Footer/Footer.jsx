import style from './Footer.module.scss';

export function Footer() {

    const { footer } = style;

    return (
        <div className={footer}>
            <p>
                <i>Developed as part of developing web development skills.</i>
            </p>
        </div>
    )
}