import styles from './SocialLinks.module.css'

const SocialLinks = ({Link,icon}) => {
  return (
    <a href={Link}>
      <ion-icon name={icon}></ion-icon>
    </a>
  )
}

export default SocialLinks