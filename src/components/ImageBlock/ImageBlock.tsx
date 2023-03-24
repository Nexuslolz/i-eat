import styles from './ImageBlock.module.scss'

interface Props {
  image: string
  name: string
  position: string
  do: string
  another: string
  github: string
  location: string
}

export const ImageBlock = (props: Props) => {
  return (
    <a target='_blank' href={props.github} className={styles['about-page-cart']} rel='noreferrer'>
      <div className={styles['about-page-cart__image-block']}>
        <img src={props.image} alt='person' />
      </div>
      <div className={styles['about-page-cart-text']}>
        <h2 className={styles['about-page-cart-text__name']}>{props.name}</h2>
        <h3 className={styles['about-page-cart-text__position']}>{props.position}</h3>
        <p className={styles['about-page-cart-text__paragraph']}>{props.location}</p>
        <p className={styles['about-page-cart-text__paragraph']}>{props.do}</p>
        <p className={styles['about-page-cart-text__paragraph']}>{props.another}</p>
      </div>
    </a>
  )
}
