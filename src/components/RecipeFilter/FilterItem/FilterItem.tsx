import styles from '../RecipeFilter.module.scss'
import diet from '../../../assets/icons/diet.svg'
import health from '../../../assets/icons/health.svg'
import cuisines from '../../../assets/icons/cuisines.svg'
import mealType from '../../../assets/icons/mealType.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

interface IFilterItem {
  query: string
  id: number
  header: string
  item1: string
  item2: string
  item3: string
  item4: string
  item5: string
  item6?: string
}

const iconArr: string[] = [diet, health, mealType, cuisines]

const FilterItem: React.FC<IFilterItem> = ({
  id,
  query,
  header,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
}: IFilterItem) => {
  const location = useLocation()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className={styles.slider__wrapper} id={String(id)}>
      <div onClick={() => setOpen((state) => !state)} className={styles.filter__subheaderWrapper}>
        <div className={styles.filter__headerList}>
          <h3 className={styles.filter__subheader}>{header}</h3>
          <img className={styles.filterList__img} src={`${iconArr[id]}`} alt='' />
        </div>
        <button className={open ? styles.filterList__btn : styles.filterList__btn_close}></button>
      </div>
      <ul className={open ? styles.filterSublist_open : styles.filterSublist}>
        <li className={styles.filterList__item}>
          <Link className={styles.filterList__link} to={`${location.pathname}?${query}=${item1}`}>
            {item1}
          </Link>
        </li>
        <li className={styles.filterList__item}>
          <Link className={styles.filterList__link} to={`${location.pathname}?${query}=${item2}`}>
            {item2}
          </Link>
        </li>
        <li className={styles.filterList__item}>
          <Link className={styles.filterList__link} to={`${location.pathname}?${query}=${item3}`}>
            {item3}
          </Link>
        </li>
        <li className={styles.filterList__item}>
          <Link className={styles.filterList__link} to={`${location.pathname}?${query}=${item4}`}>
            {item4}
          </Link>
        </li>
        <li className={styles.filterList__item}>
          <Link className={styles.filterList__link} to={`${location.pathname}?${query}=${item5}`}>
            {item5}
          </Link>
        </li>
        {item6 ? (
          <li>
            <Link className={styles.filterList__link} to={`${location.pathname}?${query}=${item6}`}>
              {item6}
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default FilterItem
